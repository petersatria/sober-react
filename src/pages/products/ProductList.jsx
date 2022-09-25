import { useEffect, useState } from "react"
import Product from "./Product"
import BreadCumb from "../../components/BreadCumb";
import axios from "axios";
import './style.css'

const ProductList = (props) => {
	const [products, setProducts] = useState([{
		"name": '',
		"price": 0,
		"images": []
	}])

	const [isLoading, setIsLoading] = useState(true)

	const getProducts = async () => {
		try {
			const { data } = await axios.get('http://localhost:5000/api/product')

			setProducts(data.result)
			setIsLoading(false)

		} catch (error) {
			console.log(error)
			// window.location.assign('/not-found-page')
		}
	}

	useEffect(() => {
		getProducts()
	}, [])

	return (
		<div className="container">
			<BreadCumb linkTo={"Product List"} />
			{isLoading && <h1 className="text-center">Loading...</h1>}
			<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 text-center my-5">
				{products && products.map(product => (
					<Product key={Math.random().toString() + product._id} product={product} price={product.price} isLoading={isLoading} />
				))}
			</div>
		</div>
	)
}

export default ProductList