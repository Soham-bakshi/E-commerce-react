import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { addToCart } from '../store';
import AmountButtons from './AmountButtons';
import Stars from './Stars';
import { useState } from 'react';

function ProductDetail() {
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();
  const { itemsData } = useSelector((state) => {
    return {
      itemsData: state.product_data.allProducts,
    };
  });

  const { id } = useParams();

  const productDetail = itemsData.filter((prod) => {
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

  const increment = () => {
    setCount((oldCount) => {
      let tempCount = oldCount + 1;
      if (tempCount > stock) {
        tempCount = stock;
      }
      return tempCount;
    });
  };

  const decrement = () => {
    setCount((oldCount) => {
      let tempCount = oldCount - 1;
      if (tempCount < 1) {
        tempCount = 1;
      }
      return tempCount;
    });
  };

  const handleAddToCart = () => {
    const item = {
      title: title,
      id: id,
      thumbnail: thumbnail,
      qty: count,
      price: price,
    };
    dispatch(addToCart(item));
  };

  return (
    <Wrapper className="section section-center">
      <div className="container">
        <div className="info">
          <div className="image">
            <img src={thumbnail} alt={title} />
          </div>
          <h4>Title : {title}</h4>
          <h4>Brand : {brand}</h4>
          <h4>Category : {category}</h4>
          <h4>Description : {description}</h4>
          <h4>Price : &#8377;{price}</h4>
          <h4>
            Rating :{' '}
            <span
              style={{
                margin: '0.5rem 0.5rem 0 0.5rem',
              }}
            >
              <Stars stars={rating} />
            </span>
          </h4>
          <h4>
            Quantity :{' '}
            <span>
              <AmountButtons
                count={count}
                increment={increment}
                decrement={decrement}
              />
            </span>
          </h4>
        </div>
        <div className="btn-container">
          <Link to="/cart" className="btn" onClick={handleAddToCart}>
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
  align-items: center;
  justify-content: center;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(0, 0, 0);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    padding: 24px;
  }
  .info {
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
    box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.9);
  }
  h4 {
    display: flex;
    align-items: center;
    color: var(--clr-white);
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
  .btn {
    background: var(--clr-white);
  }
  @media (min-width: 800px) {
    .container {
      display: block;
    }
  }
`;

export default ProductDetail;
