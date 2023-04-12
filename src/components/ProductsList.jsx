import { useFetchProductsQuery } from '../store';
import Sort from './Sort';
import ProductItem from './ProductItem';

function ProductsList() {
  const { data, error, isLoading, isSuccess } = useFetchProductsQuery();

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div
          className="spinner-border"
          style={{ width: '8rem', height: '8rem' }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error fetching data...</div>;
  }

  if (isSuccess) {
    console.log(data);
  }

  return (
    <div className="d-flex flex-column container-sm mt-4">
      <Sort />
      {data.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </div>
  );
}
export default ProductsList;
