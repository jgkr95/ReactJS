import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "../Styles/styles.css";

export default function Header() {
	const navigate = useNavigate();

	const { cartData } = useSelector((store) => store.CartReducer);

	return (
		<div id="navBar">
			<div className="menu">
				<h3
					className="home"
					onClick={() => {
						navigate("/");
					}}
				>
					TeeRex Store
				</h3>
				<a
					className="fa fa-shopping-cart"
					aria-hidden="true"
					style={{ fontSize: "35px", cursor: "pointer", paddingRight: "20px" }}
					onClick={() => {
						navigate("/cart");
					}}
				>
					<span id="cart_item_count">
						{cartData.length ? cartData.length : ""}
					</span>
				</a>
			</div>
		</div>
	);
}
