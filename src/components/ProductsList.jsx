import { useFetchProductsQuery } from '../store';
import Sort from './Sort';
import ProductItem from './ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from '../store';
import { useEffect } from 'react';
import styled from 'styled-components';
import Loading from './Loading';
import Error from './Error';

function ProductsList() {
  const { data, error, isLoading, isSuccess } = useFetchProductsQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(addProducts(data));
    }
  }, [data]);

  const items = useSelector((state) => {
    return state.product_data.filteredProducts;
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <main>
      <WrapperPage className="page">
        <div className="section-center products">
          <div>
            {!items.length ? (
              <Loading />
            ) : (
              <>
                <Sort />
                {items.map((item) => (
                  <ProductItem key={item.id} item={item} />
                ))}
              </>
            )}
          </div>
        </div>
      </WrapperPage>
    </main>
  );
}

const WrapperPage = styled.div`
  padding: 1rem;
  background: var(--clr-black);
`;

export default ProductsList;
