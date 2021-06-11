import React, { useState, useEffect } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {
	const [items, setItems] = useState(initial);

	useEffect(
		(items) => {
			console.log(`Se seleccionaron: ${items}`);
		},
		[items]
	);

	return (
		<>
			<div className="my-3">
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
				<button id="addCount" className="btn ms-4">
					<i
						className="bi bi-plus-square"
						style={{ fontSize: '2rem' }}
						onClick={() => {
							items < stock
								? setItems(items + 1)
								: //: document.getElementById("addCount").attributes.disabled;
								  alert('Sin disponibilidad');
						}}
					/>
				</button>
			</div>
			<div className="w-100">
				<a
					href="#"
					className="btn btn-primary w-75"
					onClick={() => onAdd(items)}>
					Lo Quiero
				</a>
			</div>
		</>
	);
};

export default ItemCount;
