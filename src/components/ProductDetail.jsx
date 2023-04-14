import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { addToCart } from '../store';
import AmountButtons from './AmountButtons';
import { useState } from 'react';

function ProductDetail() {
  const [amount, setAmount] = useState(1);

  // const dispatch = useDispatch();
  const { data } = useSelector((state) => {
    return {
      data: state.product_data,
    };
  });

  const { id } = useParams();

  const productDetail = data.filter((prod) => {
    return prod.id === Number(id);
  });

  const {
    thumbnail,
    title,
    brand,
    category,
    description,
    price,
    rating,
    stock,
  } = productDetail[0];

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="info">
          <div className="image">
            <img src={thumbnail} alt={title} />
          </div>
          <h4>Title : {title}</h4>
          <h4>Brand : {brand}</h4>
          <h4>Category : {category}</h4>
          <h4>Description : {description}</h4>
          <h4>Price : {price}</h4>
          <h4>Rating : {rating}</h4>
          <h4>
            Quantity :{' '}
            <span>
              <AmountButtons
                amount={amount}
                increase={increase}
                decrease={decrease}
              />
            </span>
          </h4>
        </div>
        <div className="btn-container">
          <Link
            to="/cart"
            className="btn"
            // onClick={() => dispatch(addCart(productDetail[0]))}
          >
            Add to cart
          </Link>
          <Link to="/" className="btn">
            Continue shopping
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  .container {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    padding: 24px;
  }
  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .image {
    margin-bottom: 24px;
  }
  .image img {
    max-width: 40%;
    height: auto;
    border-radius: 8px;
  }
  h4 {
    margin: 8px 0;
    font-size: 16px;
    font-weight: 500;
    color: #333;
    display: flex;
    align-items: center;
  }
  .btn-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 24px;
    flex-direction: row;
    align-items: center;
  }
`;

export default ProductDetail;
