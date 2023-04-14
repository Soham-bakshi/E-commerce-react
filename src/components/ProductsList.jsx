import { useFetchProductsQuery } from '../store';
import Sort from './Sort';
import ProductItem from './ProductItem';
import { useDispatch } from 'react-redux';
import { addProducts } from '../store';
import { useEffect } from 'react';
import styled from 'styled-components';

function ProductsList() {
  const { data, error, isLoading, isSuccess } = useFetchProductsQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addProducts(data));
  }, [data]);

  if (isLoading) {
    return (
      <div>
        <h2>loading...</h2>
      </div>
    );
  }

  if (error) {
    return <div>Error fetching data...</div>;
  }

  return (
    <main>
      <div className="page">
        <div className="section-center products">
          <div>
            <Sort />
            {data.map((item) => (
              <ProductItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductsList;
