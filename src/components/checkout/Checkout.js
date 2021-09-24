import {useContext} from "react";
import {getFirestore} from "../../factory/firebase";
import firebase from "firebase/app";
import "firebase/firestore";
import CartContext from "../../context/CartContext";
import Swal from "sweetalert2";
import {useHistory} from "react-router-dom";

function Checkout() {
	const {items, totalQuantity, totalPrice, clear} = useContext(CartContext);
	let History = useHistory();
	const saveOrder = (e) => {
		e.preventDefault();
		const products = items.map((item) => {
			return {
				id: item.id,
				title: item.productDetail.title,
				price: item.productDetail.price,
				quantity: item.quantity,
				totalPrice: item.totalPrice,
			};
		});
		const db = getFirestore();
		const order = db.collection("orders");
		const newOrder = {
			buyer: {
				lastname: document.getElementById("lastname").value.toLowerCase(),
				name: document.getElementById("name").value.toLowerCase(),
				phone: document.getElementById("phone").value,
				payType: document.getElementById("payType").value.toLowerCase(),
			},
			items: products,
			date: firebase.firestore.Timestamp.now(),
			totalQuantity: totalQuantity(),
			totalPrice: totalPrice(),
		};
		order.add(newOrder).then(({id}) => {
			Swal.fire({
				icon: "success",
				title: "Pago realizado con exito",
				text: `Muchas Gracias ${
					newOrder.buyer.name.charAt(0).toUpperCase() + newOrder.buyer.name.slice(1)
				} !!`,
				confirmButtonColor: "#198754",
				confirmButtonText: "Ver Comprobante",
				showCancelButton: true,
				cancelButtonColor: "#0d6efd",
				cancelButtonText: "Volver al Sitio",
			}).then((result) => {
				if (result.isConfirmed) {
					History.push("/ticket", {params: id});
				} else {
					History.push("/");
					clear();
				}
			});
		});
	};
	return (
		<>
			<h2 className="text-center mb-5">Resumen de Compra</h2>
			<form className="container" onSubmit={saveOrder}>
				<div className="row d-flex justify-content-between">
					<div className="col-md-7">
						<div className=" row">
							<div className="col-md-12">
								<label htmlFor="lastanme" className="form-label">
									Apellido
								</label>
								<input
									type="text"
									className="form-control"
									id="lastname"
									placeholder="Fernandez"
									required={true}
								/>
							</div>
							<div className="col-md-12">
								<label htmlFor="name" className="form-label">
									Nombre
								</label>
								<input
									type="text"
									className="form-control"
									id="name"
									placeholder="Andres Alejandro"
									required={true}
								/>
							</div>
							<div className="col-md-12">
								<label htmlFor="phone" className="form-label">
									Celular
								</label>
								<input
									type="number"
									className="form-control"
									id="phone"
									placeholder="2236545252"
									required={true}
								/>
							</div>
							<div className="col-md-12">
								<label htmlFor="payType" className="form-label">
									Forma de Pago
								</label>
								<select className="form-select" id="payType" required={true}>
									<option disabled="" value="">
										Selecciona...
									</option>
									<option>Efectivo</option>
									<option>Transferencia Bancaria</option>
									<option>MercadoPago</option>
								</select>
							</div>
						</div>
					</div>
					<div className="col-md-4 align-self-center mt-5">
						<div className="row justify-content-center">
							<div className="col-md-12 text-center">
								<p className="fw-bold">Cantidad de Items: {totalQuantity()}</p>
								<p className="fw-bold">Total a Pagar: {totalPrice()}</p>
							</div>
							<div className="form-check mb-3 col-md-12 text-center w-auto">
								<input
									className="form-check-input"
									type="checkbox"
									value=""
									id="agreeTerms"
									required
								/>
								<label className="form-check-label" htmlFor="agreeTerms" required={true}>
									<p
										className="fw-bold text-primary pointer"
										data-bs-toggle="modal"
										data-bs-target="#agree"
									>
										Aceptar Terminos y Condiciones
									</p>
									<div
										className="modal fade"
										id="agree"
										tabIndex="-1"
										aria-labelledby="exampleModalLabel"
										aria-hidden="true"
									>
										<div className="modal-dialog">
											<div className="modal-content">
												<div className="modal-header">
													<h5 className="modal-title" id="exampleModalLabel">
														Terminos y Condiciones
													</h5>
													<button
														type="button"
														className="btn-close"
														data-bs-dismiss="modal"
														aria-label="Close"
													></button>
												</div>
												<div className="modal-body">
													Sed sollicitudin porttitor dolor in bibendum. Mauris quis eros
													condimentum, vehicula lacus quis, scelerisque urna. Interdum et malesuada
													fames ac ante ipsum primis in faucibus. Pellentesque facilisis placerat
													massa, non finibus neque blandit eu. Fusce vehicula, lacus non
													sollicitudin vestibulum, velit sem tincidunt odio, ut sagittis nisl sapien
													non justo. Nunc aliquam interdum sem, sed tempor metus lobortis vel.
													Curabitur aliquet nisi ut nunc rutrum, in dapibus mi iaculis. Morbi
													efficitur, velit vitae ullamcorper commodo, velit turpis eleifend sem, ut
													consectetur lorem lacus in orci. Vestibulum in diam dignissim, malesuada
													lorem in, commodo urna. Quisque ac metus ut arcu molestie elementum
													posuere vitae urna. Aliquam nec accumsan orci, vitae eleifend ligula.
													Morbi consectetur lacus at urna sodales tincidunt. Suspendisse facilisis
													arcu vel sapien tristique, ac imperdiet leo tempor. Nunc venenatis nibh
													tortor, nec viverra nisl finibus gravida. Cras nec risus id risus pharetra
													viverra. Nulla nulla neque, commodo at lorem euismod, porttitor mattis
													leo. Mauris a vulputate elit. Aliquam ac sapien et ipsum rutrum fermentum
													ut malesuada enim. Donec pellentesque at augue ac tincidunt. Aenean mi
													ante, malesuada in fermentum eget, bibendum et arcu. Morbi sit amet mi vel
													enim aliquam placerat. Nullam nec dolor non neque ultricies scelerisque
													in.
												</div>
												<div className="modal-footer">
													<button
														type="button"
														className="btn btn-secondary"
														data-bs-dismiss="modal"
													>
														Cerrar
													</button>
												</div>
											</div>
										</div>
									</div>
								</label>
							</div>
							<button type="submit" className="btn btn-success ms-2 fw-bold w-auto">
								Finalizar Compra
							</button>
						</div>
					</div>
				</div>
			</form>
		</>
	);
}

export default Checkout;
