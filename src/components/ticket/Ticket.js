import {useEffect, useState} from "react";
import {useLocation, Link} from "react-router-dom";
import {getFirestore} from "../../factory/firebase";
import ItemTicket from "../itemTicket/ItemTicket";
import {useContext} from "react";
import CartContext from "../../context/CartContext";
const Ticket = () => {
	const {clear} = useContext(CartContext);
	let finalPrice;
	const [dataOrder, setDataOrder] = useState([]);
	const location = useLocation();
	const idOrder = location.state.params;

	useEffect(() => {
		const db = getFirestore();
		const order = db.collection("orders");
		const item = order.doc(idOrder);
		item.get().then((doc) => {
			if (doc.size === 0) {
				console.log("Sin resultados");
			}
			setDataOrder([doc.data()]);
		});
	}, [idOrder]);

	return (
		<>
			<div className="page-content container">
				<div className="page-header text-blue-d2">
					<h1 className="page-title text-secondary-d1">N°: #{idOrder}</h1>

					<div className="page-tools my-3">
						<div className="action-buttons">
							<Link className="btn bg-white btn-light mx-1px text-95" to="/" data-title="Print">
								<i className="me-1 fa fa-print text-primary-m1" />
								Imprimir
							</Link>
						</div>
					</div>
				</div>

				<div className="container border border-secondary border-4 rounded-3 p-3">
					<div className="row mt-4">
						{dataOrder.map((data, index) => (
							<div key={index} className="col-12 col-lg-10 offset-lg-1">
								<hr className="row brc-default-l1 mx-n1 mb-4" />

								<div className="row">
									<div className="col-sm-6">
										<div>
											<span className="text-sm text-grey-m2 align-middle">Para: </span>

											<span className="text-600 text-110 text-blue align-middle">
												{`${
													data.buyer.lastname.charAt(0).toUpperCase() + data.buyer.lastname.slice(1)
												} ${data.buyer.name.charAt(0).toUpperCase() + data.buyer.name.slice(1)}`}
											</span>
										</div>
										<div className="text-grey-m2">
											<div className="my-1">Colon 2043, Mar del Plata</div>
											<div className="my-1">Buenos Aires, Argentina</div>
											<div className="my-1">
												<i className="fa fa-phone fa-flip-horizontal text-secondary" />
												<b className="text-600"> {data.buyer.phone}</b>
											</div>
										</div>
									</div>

									<div className="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
										<hr className="d-sm-none" />
										<div className="text-grey-m2">
											<div className="mt-1 mb-2 text-secondary-m1 text-600 text-125">Ticket</div>

											<div className="my-2">
												<i className="fa fa-circle text-blue-m2 text-xs mr-1" />
												<span className="text-600 text-90">ID: </span>#{idOrder}
											</div>

											<div className="my-2">
												<i className="fa fa-circle text-blue-m2 text-xs mr-1" />
												<span className="text-600 text-90">
													Fecha:
													{` ${data.date.toDate().toLocaleString()} hs`}
												</span>
											</div>

											<div className="my-2">
												<i className="fa fa-circle text-blue-m2 text-xs mr-1" />
												<span className="text-600 text-90"> Status: </span>
												<span className="px-25">Pagado</span>
											</div>
										</div>
									</div>
								</div>
								<div>
									<div className="mt-4">
										<ItemTicket />
										<div className="d-flex justify-content-center my-2">
											<hr className="w-50" />
										</div>
										<div className="row mt-3">
											<div className="col-12 col-sm-7 text-grey-d2 text-95 mt-2 mt-lg-0">
												Extra note such as company or payment information...
											</div>
											<div className="col-12 col-sm-5 text-grey text-90 order-first order-sm-last">
												<div className="row my-2">
													<div className="col-7 text-right">SubTotal</div>
													<div className="col-5">
														<span className="text-120 text-secondary-d1">${data.totalPrice}</span>
													</div>
												</div>
												<div className="row my-2">
													<div className="col-7 text-right">Des. Hot Sale 10%</div>
													<div className="col-5">
														<span className="text-110 text-secondary-d1">
															${(finalPrice = data.totalPrice * 0.1)}
														</span>
													</div>
												</div>
												<div className="row fw-bold my-2 bgc-primary-l3">
													<div className="col-7 text-right">Total</div>
													<div className="col-5">
														<span className="text-150 text-success-d3 opacity-2">
															${data.totalPrice - finalPrice}
														</span>
													</div>
												</div>
											</div>
										</div>
										<hr />
										<div className="d-flex justify-content-between align-items-center">
											<Link
												to="/"
												className="btn btn-info btn-bold px-4 mt-lg-0"
												onClick={() => clear()}
											>
												Ir Home
											</Link>
											<span>Gracias por su compra</span>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Ticket;
