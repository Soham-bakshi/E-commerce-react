import { useState } from 'react';
import BasicRating from './BasicRating';
import { useNavigate } from 'react-router-dom';

import { useRemoveProductMutation, useUpdateProductMutation } from '../store';

function ProductItem({ item }) {
  const [removeProduct] = useRemoveProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const navigate = useNavigate();
  const [data, setData] = useState({
    ...item,
  });
  const [isEdit, setIsEdit] = useState(false);

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

  return (
    <div>
      {!isEdit ? (
        <div>
          <img
            style={{ width: '250px' }}
            src={item.thumbnail}
            alt={item.title}
          />
          <p>{item.title}</p>
          <p>{item.price}</p>
          <p>{item.rating}</p>
          <p>{item.description}</p>
          <button type="button" onClick={() => handleClick(item.id)}>
            details
          </button>
          <button type="button" onClick={() => setIsEdit(!isEdit)}>
            edit
          </button>
          <button type="button" onClick={() => removeProduct(item.id)}>
            remove
          </button>
        </div>
      ) : (
        <div>
          <img
            style={{ width: '250px' }}
            src={item.thumbnail}
            alt={item.title}
          />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={data.title}
              onChange={handleChange}
            ></input>
            <input
              type="number"
              name="price"
              placeholder="price"
              value={data.price}
              onChange={handleChange}
            ></input>
            <input
              type="number"
              name="rating"
              placeholder="rating"
              value={data.rating}
              onChange={handleChange}
            ></input>
            <input
              type="text"
              name="description"
              placeholder="description"
              value={data.description}
              onChange={handleChange}
            ></input>
            <button type="submit">save</button>
            <button type="button" onClick={() => setIsEdit(!isEdit)}>
              cancel
            </button>
          </form>
        </div>
      )}

      <hr />
    </div>
  );
}

export default ProductItem;
