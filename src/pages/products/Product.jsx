import './style.css'
import styles from './product.module.css'


const Product = ({ products, isLoading }) => {

	console.log('loading', isLoading)

	const overlayStyles = {
		backgroundColor: "#7C7C80"
	};

	return (
		<>
			{products.map(product => (
				<div key={Math.random().toString()} className="col mb-5">
					<div className={`card h-100 border-0 ${styles.wrapperProduct}`}>
						<a href={`/products/${product._id}`}>
							<div className={`card-img-top`}>
								{/* {isLoading ? <div style={{ overlayStyles }} /> : <img className={styles.productImg} src={product.images[0]} alt="" />} */}
								<img className={styles.productImg} src={product.images[0]} alt="" />
								<img className={` ${styles.productHover}`} src={product.images[1]} alt="" />
							</div>
						</a>
						<div className={`card-body ${styles.productDesc}`} >
							<p>{product.name}</p>
							<p>Rp{product.price}</p>
						</div>
					</div>
				</div>
			))}
		</>


	)

}

export default Product