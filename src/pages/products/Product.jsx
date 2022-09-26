import styles from './product.module.css'
import { Link } from 'react-router-dom'

const Product = ({ product, isLoading }) => {


	const price = product.price.toLocaleString('id-ID', {
		style: 'currency',
		currency: 'IDR',
	});

	return (
		<>
			{!isLoading &&
				<div className="col mb-5">
					<div className={`card h-100 border-0 ${styles.wrapperProduct}`}>
						<Link to={`/products/${product._id}`} onClick={() => { window.scrollTo(0, 0); }}>
							<div className={`card-img-top`}>
								<div>
									<img className={` ${styles.productImg}`} src={product.images[0]} alt="" />
									<img className={` ${styles.productHover}`} src={product.images[1]} alt="" />
								</div>

							</div>
						</Link>
						<div className={`card-body ${styles.productDesc}`} >
							<p className={` ${styles.listProductFont}`}>{product.name}</p>
							<p className={` ${styles.listProductFont}`}>{price}</p>
						</div>
					</div>
				</div>
			}
		</>
	)
}

export default Product