import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddProductMutation } from '../store';

function AddProduct() {
  const [data, setData] = useState({
    id: Date.now(),
    title: '',
    price: 0,
    rating: 0,
    description: '',
    category: '',
    thumbnail: '',
  });

  const [addProduct] = useAddProductMutation();
  const navigate = useNavigate();

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
    if (e.target.name === 'category') {
      setData({ ...data, category: e.target.value });
    }
    if (e.target.name === 'thumbnail') {
      setData({ ...data, thumbnail: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addProduct(data);
    navigate('/');
  };

  return (
    <div>
      <h2>Add a product</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">title : </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="title"
          value={data.title}
          onChange={handleChange}
        ></input>

        <label htmlFor="price">price : </label>
        <input
          type="number"
          name="price"
          id="price"
          placeholder="price"
          value={data.price || ''}
          onChange={handleChange}
        ></input>

        <label htmlFor="rating">rating : </label>
        <input
          type="number"
          name="rating"
          id="rating"
          placeholder="rating"
          value={data.rating || ''}
          onChange={handleChange}
        ></input>

        <label htmlFor="description">description : </label>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="description"
          value={data.description}
          onChange={handleChange}
        ></input>

        <label htmlFor="category">category : </label>
        <input
          type="text"
          name="category"
          id="category"
          placeholder="category"
          value={data.category}
          onChange={handleChange}
        ></input>

        <label htmlFor="thumbnail">thumbnail : </label>
        <input
          type="text"
          name="thumbnail"
          id="thumbnail"
          placeholder="thumbnail"
          value={data.thumbnail}
          onChange={handleChange}
        ></input>

        <button type="submit">add product</button>
      </form>
    </div>
  );
}
export default AddProduct;
