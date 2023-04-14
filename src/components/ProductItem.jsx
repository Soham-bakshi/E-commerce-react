import styled from 'styled-components';
import { FaEdit } from 'react-icons/fa';
import { BiDetail } from 'react-icons/bi';
import { useState } from 'react';
import Stars from './Stars';
import { useNavigate } from 'react-router-dom';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { FaShoppingBag } from 'react-icons/fa';
import { useRemoveProductMutation, useUpdateProductMutation } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store';
import { Link } from 'react-router-dom';

function ProductItem({ item }) {
  const { id, title, price } = item;
  const [removeProduct] = useRemoveProductMutation();
  const [updateProduct] = useUpdateProductMutation();

  const navigate = useNavigate();

  const [data, setData] = useState({
    ...item,
  });
  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();

  const { cart, itemsAdded } = useSelector((state) => {
    return {
      cart: state.cart_data.cart,
      itemsAdded: state.cart_data.itemsAdded,
    };
  });

  // console.log(cart, itemsAdded);

  const itemAdded = itemsAdded.includes(id);
  // console.log(itemAdded);

  const handleChange = (e) => {
    if (e.target.name === 'title') {
      setData({ ...data, title: e.target.value });
    }
    if (e.target.name === 'price') {
      setData({ ...data, price: e.target.value });
    }
    if (e.target.name === 'rating') {
      setData({ ...data, rating: e.target.value });
    }
    if (e.target.name === 'description') {
      setData({ ...data, description: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateProduct(data);
    setIsEdit(!isEdit);
  };

  const handleClick = (id) => {
    navigate(`productdetail/${id}`);
  };

  const handleAddToCart = () => {
    console.log('proitem');
    const tempItem = { id, title, price, amount: 1 };
    dispatch(addToCart(tempItem));
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
            <h4>Price : {item.price}</h4>
            <h4>Rating : {item.rating}</h4>
            <h5>Description : {item.description}</h5>
            <div className="btn-container">
              {!itemAdded ? (
                <button
                  className="btn btn-icon btn-margin"
                  type="button"
                  onClick={handleAddToCart}
                >
                  <BsFillCartCheckFill />
                </button>
              ) : (
                <Link to="/cart">
                  <button className="btn btn-icon btn-margin" type="button">
                    <FaShoppingBag />
                  </button>
                </Link>
              )}

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
                onClick={() => removeProduct(item.id)}
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
                  value={data.price}
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
                  value={data.rating}
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

const Wrapper = styled.div`
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
    border: 1px solid #ddd;
    margin-bottom: 20px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: #fff;
  }
  .image img {
    width: 250px;
    height: auto;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  }
  .info {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }
  .info h3,
  .info h4,
  .info h5 {
    margin: 0;
  }
  .info h3 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #333;
  }
  .info h4,
  .info h5 {
    font-size: 18px;
    margin-bottom: 5px;
    color: #777;
  }
  .form-content {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
  .form-content h3,
  .form-content h4,
  .form-content h5 {
    margin: 0;
    color: #333;
  }
  .form-content input,
  .form-content textarea {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 18px;
    margin-top: 5px;
    transition: border-color 0.3s ease;
  }
  .form-content input:focus,
  .form-content textarea:focus {
    border-color: #0080ff;
  }
  .form-content textarea {
    resize: none;
  }
  .btn-icon {
    border: none;
    background: transparent;
    /* box-shadow: none; */
  }
  .btn svg {
    height: 20px;
    width: 20px;
    fill: #333232;
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

  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      align-items: flex-start;
    }
    .image {
      margin-bottom: 10px;
    }
    .info h3 {
      font-size: 20px;
    }
    .info h4,
    .info h5 {
      font-size: 16px;
    }
    .form-content h3,
    .form-content h4,
    .form-content h5 {
      font-size: 16px;
    }
    .form-content input,
    .form-content textarea {
      font-size: 16px;
    }
  }
`;

export default ProductItem;
