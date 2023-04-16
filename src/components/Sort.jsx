import styled from 'styled-components';
import { sortProducts, updateSort } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function Sort() {
  const dispatch = useDispatch();
  const { sort } = useSelector((state) => {
    return {
      sort: state.product_data.sort,
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
      <form>
        <label htmlFor="sort">sort by : </label>
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
  justify-content: right;
  margin: 2rem 0;
  @media (max-width: 576px) {
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    border-radius: 0.3rem;
  }
  label {
    font-size: 20px;
    font-weight: 500;
    text-transform: capitalize;
    color: var(--clr-white);
  }
`;

export default Sort;
