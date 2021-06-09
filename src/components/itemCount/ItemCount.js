import React, { useState, useEffect } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {
	const [items, setItems] = useState(initial);

	return (
		<>
			<div className="my-3">
				<button
					className="btn btn-primary me-2"
					onClick={() => {
						items > 1 && setItems(items - 1);
					}}>
					<i
						className="bi bi-dash-square-fill"
						style={{ fontSize: '1rem', color: 'white' }}
					/>
				</button>
				<span className="fs-3 bold align-middle">{items}</span>
				<button
					className="btn btn-primary ms-2"
					onClick={() => {
						items < stock
							? setItems(items + 1)
							: alert('Sin disponibilidad');
					}}>
					<i
						className="bi bi-plus-square-fill"
						style={{ fontSize: '1rem', color: 'white' }}
					/>
				</button>
			</div>
			<div className="w-100">
				<a href="#" className="btn btn-primary w-75">
					Lo Quiero
				</a>
			</div>
		</>
	);
};

export default ItemCount;
