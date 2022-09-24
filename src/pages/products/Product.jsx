import './style.css'
import styles from './product.module.css'

const Product = ({ product, isLoading }) => {

	return (
		<>
			{!isLoading &&
				<div className="col mb-5">
					<div className={`card h-100 border-0 ${styles.wrapperProduct}`}>
						<a href={`/products/${product._id}`}>
							<div className={`card-img-top`}>
								<div>
									<img className={` ${styles.productImg}`} src={product.images[0]} alt="" />
									<img className={` ${styles.productHover}`} src={product.images[1]} alt="" />
								</div>

							</div>
						</a>
						<div className={`card-body ${styles.productDesc}`} >
							<p>{product.name}</p>
							<p>Rp{product.price}</p>
						</div>
					</div>
				</div>
			}
		</>
	)
}

export default Product