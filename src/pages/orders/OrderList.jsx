import { useEffect, useState } from "react"
import axios from "axios";

import Order from "./Order"
import styles from './order.module.css'
import { useParams } from "react-router-dom";

const OrderList = () => {

	const [orders, setOrders] = useState([{
		order: [{}],
		orderId: "",
		price: 0,
		productId: "",
		products: [{}],
		quantity: 1
	}])

	const [zero, setZero] = useState(true)

	const { userId } = useParams()

	const getOrders = async () => {
		try {
			const { data } = await axios.get(`${process.env.REACT_APP_URL}transactionHistoryDetail/${userId}`)
			console.log(data)

			// console.log('from list', data.result)
			setZero(false)
			setOrders(data.result)

		} catch (error) {
			console.log(error)
			// window.location.assign('/not-found-page')
		}
	}

	useEffect(() => {
		getOrders()
	}, [])

	console.log(orders)

	return (
		<div className="container">
			<div className={`my-5 ${styles.wrapperList}`}>
				<h1 className={styles.orderTitle}>Transaction List</h1>
				{zero ? <h2 className="text-center">No transaction yet, buy some products first!</h2> : ''}
				{orders && orders.map(order => {
					return order.products?.map((product) => {
						return order.order?.map((orderTrans) => {
							return (

								<Order key={Math.random()} product={product} productTrans={order} order={orderTrans} />
							)
						})
					})
				})}

			</div>
		</div >
	)
}

export default OrderList