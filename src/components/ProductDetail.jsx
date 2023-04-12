import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ProductDetail() {
  const data = useSelector((state) => {
    return state.product_data;
  });

  const { id } = useParams();

  const productDetail = data.filter((prod) => {
    return prod.id === Number(id);
  });

  const { thumbnail, title, brand, category, description, price, rating } =
    productDetail[0];

  return (
    <div>
      <div>
        <img src={thumbnail} alt={title} />
        <h2>Title : {title}</h2>
        <h3>Brand : {brand}</h3>
        <h3>Category : {category}</h3>
        <h3>Description : {description}</h3>
        <h3>Price : {price}</h3>
        <h3>Rating : {rating}</h3>
      </div>
      <button type="button">Add to cart</button>
      <Link to="/">Continue shopping</Link>
    </div>
  );
}
export default ProductDetail;
