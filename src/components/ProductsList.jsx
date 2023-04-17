import Sort from './Sort';
import Error from './Error';
import Loading from './Loading';
import { useEffect } from 'react';
import styled from 'styled-components';
import { addProducts } from '../store';
import ProductItem from './ProductItem';
import { useFetchProductsQuery } from '../store';
import { useDispatch, useSelector } from 'react-redux';

function ProductsList() {
  // calling the query hook from RTK query for GET request
  const { data, error, isLoading, isSuccess } = useFetchProductsQuery();

  // useDispatch hook to access dispatch function from redux store
  const dispatch = useDispatch();

  // every time data changes and if request successful and data is defined we add the data to the relevant property in product slice state
  useEffect(() => {
    if (isSuccess) {
      dispatch(addProducts(data));
    }
  }, [data]);

  // accessing redux store
  const items = useSelector((state) => {
    return state.product_data.filteredProducts;
  });

  // isLoading true if query is currently loading for the first time, and has no data yet
  if (isLoading) {
    return <Loading message="loading data" />;
  }

  // error result if error occurred during request
  if (error) {
    return <Error message="there was a error while fetching data" />;
  }

  return (
    <main>
      <WrapperPage className="page">
        <div className="section-center products">
          <div>
            {!items.length ? (
              <Loading message="processing data" />
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

// styled component
const WrapperPage = styled.div`
  padding: 1rem;
  background: var(--clr-black);
`;

export default ProductsList;
