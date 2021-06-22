import React, { useState } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {
	const [items, setItems] = useState(initial);

	return (
		<>
			<div className="mt-3">
				<button id="dashCount" className="btn me-4">
					<i
						className="bi bi-dash-square"
						style={{ fontSize: '2rem' }}
						onClick={() => {
							items > 1 && setItems(items - 1);
						}}
					/>
				</button>
				<span className="fs-3 bold align-middle">{items}</span>
				<button
					id="addCount"
					className="btn ms-4"
					disabled={items === stock ? true : false}>
					<i
						className="bi bi-plus-square"
						style={{ fontSize: '2rem' }}
						onClick={() => {
							items < stock
								? setItems(items + 1)
								: alert('Sin disponibilidad');
						}}
					/>
				</button>
			</div>
			<div className="w-auto">
				<a
					href="#"
					className="btn btn-primary fw-bold"
					onClick={() => onAdd(items)}>
					Agregar al Carrito
				</a>
			</div>
		</>
	);
};

export default ItemCount;
