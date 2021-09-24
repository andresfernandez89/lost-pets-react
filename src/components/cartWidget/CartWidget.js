import {Link} from "react-router-dom";
import {useContext} from "react";
import CartContext from "../../context/CartContext";
const CartWidget = () => {
	const {totalQuantity} = useContext(CartContext);

	return (
		<>
			<Link to="/cart" className="ms-3">
				<i className="bi bi-cart4" style={{fontSize: "2rem", color: "black"}} />
			</Link>
			{totalQuantity() !== 0 && <span className="ms-2 fs-3">{totalQuantity()}</span>}
		</>
	);
};
export default CartWidget;
