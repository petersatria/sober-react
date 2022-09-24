import { useEffect, useState } from "react"
import axios from "axios";

import Order from "./Order"
import styles from './order.module.css'

const OrderList = () => {

	const [orders, setOrders] = useState([{
		order: [{}],
		orderId: "",
		price: 0,
		productId: "",
		products: [{
			name: ""
		}]
	}])

	const [products, setProducts] = useState([{}])

	const getOrders = async () => {
		try {
			const { data } = await axios.get('http://localhost:5000/transactionHistoryDetail/632ebff053f9a55b23f334b9')

			// console.log('from list', data.result)
			setOrders(data.result)

		} catch (error) {
			console.log(error)
			// window.location.assign('/not-found-page')
		}
	}

	useEffect(() => {
		getOrders()
	}, [])


	const getData = orders.map((order) => {
		// console.log('dari getData', order.products)

		order.products?.map((product) => {
			console.log("inside map", product.name)

		})
	})

	console.log("orders", orders)


	return (
		<div className="container">
			<div className={`my-5 ${styles.wrapperList}`}>
				<h1 className={styles.orderTitle}>Transaction List</h1>
				{orders && orders.map(order => {
					order.products?.map((product) => {
						<h1>{product.name}</h1>
					})
				})}

				<div className={`m-5 ${styles.wrapperCard}`}>
					<div className="card-body">
						<div className="row p-0 m-0">
							<div className="col-md-4 p-0">
								<img src="https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/3-10.jpg" className="img-fluid" alt="..." />
							</div>
							<div className="col-md-4 align-self-center">
								<div className={``}>
									<p className={styles.productName}>product.name</p>
									{/* <p className={styles.productDesc}>product.desc</p> */}
								</div>
							</div>
							<div className="col-md-1 align-self-center ps-0">
								<p className={`text-end ${styles.productPrice}`}>X {"1"}</p>
							</div>
							<div className="col-md-3 align-self-center ps-0 pe-4">
								<p className={`text-end ${styles.productPrice}`}>Rp1000000</p>
							</div>
						</div>
						<div className={styles.borderTop}></div>

						<div className="row py-2 m-0">
							<div className="col-md-4"></div>
							<div className="col-md-5 align-self-center">
								<div className={``}>
									<p className={`m-0 ${styles.productName}`}>Total Price</p>
								</div>
							</div>
							<div className="col-md-3 align-self-center ps-0 pe-4">
								<p className={`text-end m-0 ${styles.productPrice}`}>Rp2000000</p>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div >
	)
}

export default OrderList