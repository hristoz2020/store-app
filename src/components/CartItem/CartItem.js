const CartItem = ({item, cart, setCart, handleRemove}) => {
	const handleChange = (item, d) => {
		const ind = cart.indexOf(item);
		const arr = cart;
		arr[ind].amount += d;

		if (arr[ind].amount === 0) arr[ind].amount = 1;
		setCart([...arr]);
	};
	return (
		<div className="cart-box-item" key={item.id}>
			<div className="cart_box">
				<div className="cart_img">
					<img src={item.image} alt="product" />
					<p>{item.title}</p>
				</div>
				<div>
					<button
						onClick={() => handleChange(item, 1)}
						className="cart-add"
					>
						<i className="fa-solid fa-plus"></i>
					</button>
					<button className="cart-amount">{item.amount}</button>
					<button
						onClick={() => handleChange(item, -1)}
						className="cart-add"
					>
						<i className="fa-solid fa-minus"></i>
					</button>
				</div>
				<div>
					<span>{item.price}</span>
					<button onClick={() => handleRemove(item.id)}>
						<i className="fa-solid fa-trash"></i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
