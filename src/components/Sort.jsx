import styled from 'styled-components';
import { sortProducts, updateSort } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function Sort() {
  const dispatch = useDispatch();
  const { sort, itemsData } = useSelector((state) => {
    return {
      sort: state.product_data.sort,
      itemsData: state.product_data.allProducts,
    };
  });

  useEffect(() => {
    dispatch(sortProducts());
  }, [sort]);

  const updateItemsSort = (e) => {
    const value = e.target.value;
    dispatch(updateSort(value));
  };

  return (
    <Wrapper>
      <p>{itemsData.length} products found</p>
      <form>
        <label htmlFor="sort">sort by</label>
        <select
          name="sort"
          id="sort"
          className="sort-input"
          value={sort}
          onChange={updateItemsSort}
        >
          <option value="none">none</option>
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
        </select>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
  @media (max-width: 576px) {
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
    font-size: 20px;
    font-weight: 500;
  }
  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    font-size: 20px;
    font-weight: 500;
    text-transform: capitalize;
  }
`;

export default Sort;
