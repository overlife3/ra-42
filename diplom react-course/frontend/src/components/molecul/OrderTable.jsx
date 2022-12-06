import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import requestRetry from "../../services/api/requestRetry";
import { Preloader } from "../molecul/Preloader";
import { NewPriceBlock } from "../molecul/NewPriceBlock";
import { useDispatch, useSelector } from "react-redux";
import { cartChangeError, cartChangeItems, cartChangeLoading, cartChangeNewPrice} from "../../redux/cartReducer";
import { RepeatBtnPage } from "./RepeatBtnPage";
import { ErrorMessage } from "./ErrorMessage";
export function OrderTable() {
	const dispatch = useDispatch()
	const state = useSelector(state => state.cart)

	async function getNewPrice() {
		dispatch(cartChangeLoading(true))
		try {
			let items = JSON.parse(localStorage.getItem("cart"))
			if (!items) {
				items = []
			}
			const arrNewPrice = []

			for (let item of items) {
				const price = await requestRetry(
					`${process.env.REACT_APP_BASE_URL}items/` + item.id, {method: "GET"}, 5
				).then((res) => res.price);
				arrNewPrice.push(price);
			}
			dispatch(cartChangeNewPrice(arrNewPrice))
		} catch (error) {
			dispatch(cartChangeError(error))
		}
	}

  useEffect(() => {
    getNewPrice()
  }, []);

	const handleRemoveWare = (id, size, state) => {
		const itemsCart = state.items
		const arrNewPrice = state.arrNewPrice
		const resItemsCart = []
		const resArrNewPrice = []

		itemsCart.forEach((item, index) => {
			if (item.id !== id || item.size !== size) {
				resItemsCart.push(item)
				resArrNewPrice.push(arrNewPrice[index])
			}
		})
		localStorage.setItem("cart", JSON.stringify(resItemsCart))
		dispatch(cartChangeNewPrice(resArrNewPrice))
		dispatch(cartChangeItems(resItemsCart))	
	}

  return (
    <>
      {state.loading && <Preloader ofPage />}
      {state.error && !state.loading && 
				<>
					<ErrorMessage>Произошла ошибка</ErrorMessage>
					<RepeatBtnPage onClick={getNewPrice} />
				</>}
      {!state.error && !state.loading && (
        <div className="container">
          <section className="cart">
            <h2 className="text-center">Корзина</h2>
            <table className="table table-bordered table-cart">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Название</th>
                  <th scope="col">Размер</th>
                  <th scope="col">Кол-во</th>
                  <th scope="col">Стоимость</th>
                  <th scope="col">Итого</th>
                  <th scope="col">Действия</th>
                </tr>
              </thead>
              <tbody>
                {state.items.map((item, index) => (
                  <tr key={item.id + item.size}>
                    <td scope="row">{index + 1}</td>
                    <td>
                      <Link to={`/catalog/${item.id}`}>{item.title}</Link>
                    </td>
                    <td>{item.size}</td>
                    <td>{item.quant}</td>
                    <td>
											{item.price === state.arrNewPrice[index] ? item.price : <NewPriceBlock newPrice={state.arrNewPrice[index]} oldPrice={item.price} />}
										</td>
                    <td>{state.arrNewPrice[index] * item.quant}</td>
                    <td>
                      <button className="btn btn-outline-danger btn-sm" onClick={() => handleRemoveWare(item.id, item.size, state)}>
                        Удалить
                      </button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="5" className="text-right">
                    Общая стоимость
                  </td>
                  <td>
                    {state.items.reduce((sum, item, index) => {
                      return sum + item.quant * state.arrNewPrice[index];
                    }, 0)}
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      )}
    </>
  );
}