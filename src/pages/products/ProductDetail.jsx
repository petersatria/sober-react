import { useEffect, useState } from "react"
import { useParams, redirect, Link } from "react-router-dom";
import Product from "./Product";
import BreadCumb from "../../components/BreadCumb";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import styles from './product.module.css'
import { useDispatch } from 'react-redux'
import { addCart } from '../../store/actions/CartAction'

const ProductDetail = (props) => {
	const [items, setItems] = useState(1);
	const [product, setProduct] = useState('')
	const [productPrice, setProductPrice] = useState(0)
	const [productImg, setProductImg] = useState([])
	const [productsRelated, setProductsRelated] = useState([{
		"name": '',
		"price": 0,
		"images": []
	}])
	const [refresh, setRefresh] = useState(0);

	const dispatch = useDispatch()

	const [isLoading, setIsLoading] = useState(true)
	const { id } = useParams()

	useEffect(() => {
		getProduct()
		getProducts()

	}, [refresh])

	const itemsHandler = e => {
		if (e.target.value > 10) {
			setItems(10)
		} else if (e.target.value < 1) {
			setItems(1)
		} else {
			setItems(e.target.value)
		}
	}

	const addToCartHandler = async () => {
		// await axios.post('http://localhost:5000/cart', { productId: id, quantity: items })

		dispatch(addCart({ productId: id, quantity: items }))
	}

	const getProduct = async () => {
		try {
			const { data } = await axios.get(`http://localhost:5000/api/product/${id}`)

			setProduct(data.product)
			setProductPrice(data.product.price)
			setProductImg(data.product.images)
			setRefresh(prev => prev + 1)

		} catch (error) {
			console.log(error)
		}
	}

	const getProducts = async () => {
		try {
			const { data } = await axios.get('http://localhost:5000/api/product')

			setProductsRelated(data.result)
			setIsLoading(false)

		} catch (error) {
			console.log(error)
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

	const settingsRelated = {
		dots: true,
		infinite: false,
		arrows: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	// const shuffled = [...productsRelated].sort(() => 0.5 - Math.random());

	const price = productPrice.toLocaleString('id-ID', {
		style: 'currency',
		currency: 'IDR',
	});

	return (
		<div className="container">
			<BreadCumb linkTo={product} />
			<div className="row text-center my-5">
				<div className="col-12 col-md-6 align-self-center">
					<Slider {...settings}>
						{productImg.map((img) => (
							<div key={img}>
								<img className={styles.productDetailImg} src={img} alt="" />
							</div>
						))}
					</Slider>
				</div>
				<div className={`col-12 col-md-6 my-5 align-self-center`}>
					<h1 className={styles.nameProduct}>{product.name}</h1>
					<p className={`mt-5 mt-md-3 mt-lg-5 ${styles.descProduct}`}>
						{product.detail}
					</p>
					<p className={` mt-5 mt-md-3 mt-lg-5 ${styles.priceProduct}`}>{price}</p>
					<div className="row justify-content-center">
						<div className="col-4 mt-5 mt-md-3 mt-lg-5">
							<input className={`${styles.fullWidth} ${styles.inputNum}`} type="number" name="quantity" id="quantity" min={1} max={10} onChange={itemsHandler} value={items} />
						</div>
						<div className="col-4 mt-5 mt-md-3 mt-lg-5">
							<Link to='/cart' className={`btn btn-dark ${styles.fullWidth}`} style={{ fontSize: "14px", padding: "10px" }} onClick={addToCartHandler} >Add to cart</Link>
						</div>
					</div>
					<div className={`mt-5 mt-md-3 mt-lg-5 align-items-end ${styles.border}`}>
						<p className={`my-5 my-md-3 my-lg-5 ${styles.catProduct}`}>CATEGORY: {"ANY CATEGORY"}</p>
					</div>
				</div>
			</div>
			<div className={` row text-center my-md-5 `}>
				<div className="col-12 mt-md-5">
					<div className={`mt-md-5 ${styles.border}`}>
						<h2 className={`mt-5 ${styles.relatedProductTitle}`}>Related Products</h2>
						<Slider {...settingsRelated}>
							{productsRelated && productsRelated.slice(0, 4).map(product => (
								<div key={Math.random().toString() + product._id} className="mt-5 p-3">
									<Product product={product} isLoading={isLoading} />
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
		</div >
	)
}

export default ProductDetail