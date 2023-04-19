import Stars from './Stars';
import { useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { FaEdit } from 'react-icons/fa';
import { BiDetail } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineDeleteForever } from 'react-icons/md';
import {
  addToCart,
  useRemoveProductMutation,
  useUpdateProductMutation,
} from '../store';

function ProductItem({ item }) {
  // component level state to handle edit functionality
  const [data, setData] = useState({
    ...item,
  });
  // component level state to handle edit toggle functionality
  const [isEdit, setIsEdit] = useState(false);

  // RTK Query hook for PUT and DELETE request
  const [removeProduct] = useRemoveProductMutation();
  const [updateProduct] = useUpdateProductMutation();

  // accessing state from redux store
  const { cart } = useSelector((state) => {
    return {
      cart: state.cart_data.cartItems,
    };
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  //  onchange handlers
  const handleChange = (e) => {
    if (e.target.name === 'title') {
      setData({ ...data, title: e.target.value });
    }
    if (e.target.name === 'price') {
      setData({ ...data, price: Number(e.target.value) });
    }
    if (e.target.name === 'rating') {
      setData({ ...data, rating: Number(e.target.value) });
    }
    if (e.target.name === 'description') {
      setData({ ...data, description: e.target.value });
    }
  };

  // onsubmit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Product edited!', {
      position: 'top-right',
      autoClose: 3000,
      theme: 'dark',
    });
    // dispatching action object
    updateProduct(data);
    setIsEdit(!isEdit);
  };

  // programmatic navigation
  const handleClick = (id) => {
    navigate(`productdetail/${id}`);
  };

  // handler to add product to cart
  const handleAddToCart = () => {
    const cartItem = {
      title: item.title,
      id: item.id,
      thumbnail: item.thumbnail,
      qty: 1,
      price: item.price,
    };
    // dispatching action object
    dispatch(addToCart(cartItem));
    toast.success('Product added to cart!', {
      position: 'top-right',
      autoClose: 3000,
      theme: 'dark',
    });
  };

  return (
    <Wrapper>
      {!isEdit ? (
        <div className="container">
          <div className="image">
            <img
              style={{ width: '250px' }}
              src={item.thumbnail}
              alt={item.title}
            />
          </div>
          <div className="info">
            <h3>Name : {item.title}</h3>
            <h4>Price : &#8377;{item.price}</h4>
            <h4 style={{ display: 'flex' }}>
              Rating :{' '}
              <span style={{ margin: '0.05rem 0.5rem' }}>
                <Stars stars={item.rating} />
              </span>
            </h4>

            <h5>Description : {item.description}</h5>
            <div className="btn-container">
              <button
                className="btn btn-icon btn-margin"
                onClick={handleAddToCart}
              >
                <BsFillCartCheckFill />
              </button>
              <button
                className="btn btn-icon btn-margin"
                type="button"
                onClick={() => handleClick(item.id)}
              >
                <BiDetail />
              </button>
              <button
                className="btn btn-icon btn-margin"
                type="button"
                onClick={() => setIsEdit(!isEdit)}
              >
                <FaEdit />
              </button>
              <button
                className="btn btn-icon btn-margin"
                type="button"
                onClick={() => {
                  toast.warn('Product removed!', {
                    position: 'top-right',
                    autoClose: 3000,
                    theme: 'dark',
                  });
                  return removeProduct(item.id);
                }}
              >
                <MdOutlineDeleteForever />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="image">
            <img
              style={{ width: '250px' }}
              src={item.thumbnail}
              alt={item.title}
            />
          </div>
          <div className="info">
            <form onSubmit={handleSubmit}>
              <div className="form-content">
                <label htmlFor="title">
                  <h3>Name : </h3>
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={data.title}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="form-content">
                <label htmlFor="price">
                  <h4>Price : </h4>
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  value={data.price || ''}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="form-content">
                <label htmlFor="rating">
                  <h4>rating : </h4>
                </label>
                <input
                  type="number"
                  name="rating"
                  id="rating"
                  value={data.rating || ''}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="form-content">
                <label htmlFor="description">
                  <h5>Description : </h5>
                </label>
                <textarea
                  type="text"
                  name="description"
                  id="description"
                  rows="2"
                  cols="50"
                  value={data.description}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="btn-container">
                <button className="btn btn-margin" type="submit">
                  save
                </button>
                <button
                  className="btn btn-margin"
                  type="button"
                  onClick={() => setIsEdit(!isEdit)}
                >
                  cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Wrapper>
  );
}

// styled components
const Wrapper = styled.div`
  .container {
    display: flex;
    padding: 20px;
    border: 1px solid var(--clr-white);
    margin-bottom: 20px;
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    background-color: rgb(0, 0, 0);
  }
  .image img {
    width: 250px;
    height: auto;
    border-radius: 5px;
    box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.9);
  }
  .info {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }
  .form-content {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
  .form-content input,
  .form-content textarea {
    padding: 10px;
    border: 1px solid var(--clr-white);
    border-radius: 5px;
    margin-top: 5px;
  }
  h3,
  h4,
  h5,
  label {
    color: var(--clr-white);
  }
  @media only screen and (max-width: 800px) {
    .container {
      flex-direction: column;
      .image {
        margin-bottom: 10px;
      }
    }
  }
  .btn-icon {
    border: none;
    background: transparent;
  }
  .btn svg {
    height: 20px;
    width: 20px;
    fill: var(--clr-red-dark);
  }
  .btn-container {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    margin-top: 10px;
  }
  .btn-margin {
    margin-right: 10px;
  }
`;

export default ProductItem;
