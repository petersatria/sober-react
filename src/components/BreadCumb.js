import '../pages/products/style.css'

const BreadCumb = ({ linkTo }) => {

	return (
		<div className="wrapper-header">
			<div className="breadcumb-header">
				<a href="/">Home</a>
				<p className="bi bi-chevron-right"></p>
				{linkTo.name && <><a href="/products/">Product List</a><p className="bi bi-chevron-right"></p></>}
				<p className="breadcumb-p">{linkTo.name || linkTo}</p>
			</div>
		</div>
	)
}

export default BreadCumb