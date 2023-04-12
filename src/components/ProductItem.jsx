import { useState } from 'react';
import BasicRating from './BasicRating';
import { useRemoveProductMutation, useUpdateProductMutation } from '../store';

function ProductItem({ item }) {
  const [data, setData] = useState({
    ...item,
  });

  const [isedit, setIsEdit] = useState(false);

  const [removeProduct] = useRemoveProductMutation();
  const [updateProduct] = useUpdateProductMutation();

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
    setIsEdit(!isedit);
  };

  return (
    <div>
      {!isedit ? (
        <div>
          <p>{item.title}</p>
          <p>{item.price}</p>
          <p>{item.rating}</p>
          <p>{item.description}</p>
          <button type="button" onClick={() => setIsEdit(!isedit)}>
            edit
          </button>
          <button type="button" onClick={() => removeProduct(item.id)}>
            remove
          </button>
        </div>
      ) : (
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
          <button type="button" onClick={() => setIsEdit(!isedit)}>
            cancel
          </button>
        </form>
      )}

      <hr />
    </div>
  );
}
export default ProductItem;
