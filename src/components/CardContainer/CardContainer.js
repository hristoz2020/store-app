import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CardContainer = ({
	product,
	detailsBtn,
	addToCartBtn,
	handleClick,
	cart,
}) => {
	const [btn, setBtn] = useState("Add to cart");

	let productTitle =
		product.title.length > 35
			? product.title.slice(0, 35).concat("...")
			: product.title;

	useEffect(() => {
		cart.map((x) => x.id).includes(product.id)
			? setBtn("Remove")
			: setBtn("Add to cart");
	}, [cart, product.id]);

	return (
		<li className="card-container">
			<img className="product-img" src={product.image} alt="product" />
			<h3 className="product-title">{productTitle}</h3>
			<p className="product-category">{product.category}</p>
			<p className="product-price">{product.price} BGN</p>
			<div className="card-container-buttons">
				{detailsBtn && (
					<Link
						to={`/all-products/details/${product.id}`}
						state={product}
						className="details-btn"
					>
						Details
					</Link>
				)}
				{addToCartBtn && (
					<button
						onClick={(e) => {
							handleClick(e, product);
						}}
						className="add-to-cart-btn"
					>
						{btn}
					</button>
				)}
			</div>
		</li>
	);
};

export default CardContainer;
