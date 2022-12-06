import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import filterArrWare from "../../utils/filterStorage";
import { cartChangeItems } from "../../redux/cartReducer";

export function  InCartBtn({size, quant, wareInfo}) {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleClick = () => {
		const itemsCartStorage = JSON.parse(localStorage.getItem("cart"))
		let resArr

		if (!itemsCartStorage) {
			localStorage.setItem("cart", JSON.stringify([wareInfo]))
			resArr = [wareInfo]
		} else {
			itemsCartStorage.push(wareInfo)
			resArr = filterArrWare(itemsCartStorage)
			localStorage.setItem("cart", JSON.stringify(resArr))
		}

		dispatch(cartChangeItems(resArr))
		navigate("/cart")
	}
	return (
		<button
			className="btn btn-danger btn-block btn-lg"
			disabled={!size || quant === 0}
			onClick={handleClick}
		>
			В корзину
		</button>
	)
}