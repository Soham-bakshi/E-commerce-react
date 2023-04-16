import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';

const AmountButtons = ({ increment, decrement, count }) => {
  return (
    <Wrapper className="amount-btns">
      <button type="button" className="amount-btn" onClick={decrement}>
        <FaMinus />
      </button>
      <h4 className="amount">{count}</h4>
      <button type="button" className="amount-btn" onClick={increment}>
        <FaPlus />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h4 {
    margin: 1rem 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default AmountButtons;
