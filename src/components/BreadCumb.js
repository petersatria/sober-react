import '../style.css'
import { Link } from 'react-router-dom'

const BreadCumb = ({ linkTo }) => {

	return (
		<div className="wrapper-header">
			<div className="breadcumb-header">
				<Link to="/">Home</Link>
				<p className="bi bi-chevron-right"></p>
				{linkTo.name && <><Link to="/products/">Product List</Link><p className="bi bi-chevron-right"></p></>}
				<p className="breadcumb-p">{linkTo.name || linkTo}</p>
			</div>
		</div>
	)
}

export default BreadCumb