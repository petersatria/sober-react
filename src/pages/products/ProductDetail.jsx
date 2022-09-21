import { useEffect, useState } from "react"

import styles from './product.module.css'
import cx from 'classnames'
import './style.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import BreadCumb from "../../components/BreadCumb";
import Product from "./Product";

const ProductDetail = (props) => {
	const [items, setItems] = useState(1);
	const [product, setProduct] = useState('')
	const [productImg, setProductImg] = useState([])

	const { id } = useParams()

	useEffect(() => {
		getProduct()
	}, [])

	const itemsHandler = e => {
		if (e.target.value > 10) {
			setItems(10)
		} else if (e.target.value < 1) {
			setItems(1)
		} else {
			setItems(e.target.value)
		}
		// console.log(e.target.value)
	}

	const addToCartHandler = () => {
		console.log("add to cart", items)

		//axios.post

		// props.onAddItems(items)
		// setItems(1)
		// window.location.assign('/cart')
	}

	const getProduct = async () => {
		try {
			const { data } = await axios.get(`http://localhost:5000/api/product/${id}`)
			setProduct(data.data)
			setProductImg(data.data.images)

		} catch (error) {
			console.log(error)
			// window.location.assign('/not-found-page')
		}
	}

	function Arrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{ ...style, filter: "invert(1)" }}
				onClick={onClick}
			/>
		);
	}

	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		nextArrow: <Arrow />,
		prevArrow: <Arrow />
	};


	return (
		<div className="container">
			<BreadCumb linkTo={product} />

			<div className="row text-center my-5">
				<div className="col-12 col-md-6 mb-5 align-self-center">
					<Slider {...settings}>
						{productImg.map((img) => (
							<div key={img}>
								<img className=" product-detail-image" src={img} alt="" />
							</div>
						))}
					</Slider>
				</div>
				<div className={`col-12 col-md-6 my-5 align-self-center`}>
					<h1 className="name-product">{product.name}</h1>
					<p className="desc-product mt-5 mt-md-3 mt-lg-5">
						{product.detail}
					</p>
					<p className="price-product mt-5 mt-md-3 mt-lg-5">Rp{product.price}</p>
					<div className="row justify-content-center">
						<div className="col-4 mt-5 mt-md-3 mt-lg-5">
							<input className={cx(styles.fullWidth, styles.inputNum)} type="number" name="quantity" id="quantity" min={1} max={10} onChange={itemsHandler} value={items} />
						</div>
						<div className="col-4 mt-5 mt-md-3 mt-lg-5">
							<button className={`btn btn-dark ${styles.fullWidth}`} onClick={addToCartHandler}>Add to cart</button>
						</div>
					</div>
					<div className={`mt-5 mt-md-3 mt-lg-5 align-items-end ${styles.category}`}>
						<p className="cat-product my-5 my-md-3 my-lg-5">CATEGORY: {product.thumbnail}</p>
					</div>
				</div>
			</div>
			<div className="mt-5 text-center">
				<h2 className="mt-5">RELATED PRODUCTS</h2>
				{/* <Product products={products} /> */}
			</div>
		</div >
	)
}

export default ProductDetail