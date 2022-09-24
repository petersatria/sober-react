import styles from './order.module.css'

const Order = ({ order }) => {

	console.log('from Order.jsx', order)
	return (
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
	)


}

export default Order