import { Link } from 'react-router-dom';

const Item = ({ id, element }) => {
	return (
		<div
			id={id}
			className="col-md-6 col-lg-4 d-flex justify-content-center">
			<div>
				<div
					className="card col-3 m-2 rounded-3"
					style={{ width: '18rem' }}>
					<img src={element.pictureUrl} className="rounded" alt="" />
					<div className="card-body">
						<h5 className="card-title">{element.title}</h5>
						<p className="fw-bold" style={{ fontSize: '36px' }}>
							${element.price}
						</p>
						<p className="card-text">{element.description}</p>
						<div>
							<Link
								className="btn btn-primary fw-bold"
								to={`/item/${id}`}>
								Ver detalle
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Item;
