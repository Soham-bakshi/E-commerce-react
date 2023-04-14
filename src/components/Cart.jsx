import styled from 'styled-components';

function Cart() {
  return (
    <div>cart</div>
    // <Wrapper>
    //   <div className="cart-container">
    //     <div className="cart-item">
    //       <img src="https://example.com/item1.jpg" alt="Item 1" />
    //       <div className="item-details">
    //         <h3>Item 1</h3>
    //         <p>Price: $10.00</p>
    //         <div className="item-quantity">
    //           <button className="quantity-button minus">-</button>
    //           <input type="text" className="quantity-input" value="1" />
    //           <button className="quantity-button plus">+</button>
    //         </div>
    //         <p className="item-subtotal">Sub-total: $10.00</p>
    //       </div>
    //     </div>
    //     <div className="cart-item">
    //       <img src="https://example.com/item2.jpg" alt="Item 2" />
    //       <div className="item-details">
    //         <h3>Item 2</h3>
    //         <p>Price: $15.00</p>
    //         <div className="item-quantity">
    //           <button className="quantity-button minus">-</button>
    //           <input type="text" className="quantity-input" value="1" />
    //           <button className="quantity-button plus">+</button>
    //         </div>
    //         <p className="item-subtotal">Sub-total: $15.00</p>
    //       </div>
    //     </div>
    //     <div className="cart-totals">
    //       <p className="cart-total">Total: $25.00</p>
    //     </div>
    //   </div>
    // </Wrapper>
  );
}

const Wrapper = styled.div`
  .cart-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 80%;
    margin: 0 auto;
  }

  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 2rem 0;
    padding: 1rem;
    border: 1px solid #ccc;
  }

  .cart-item img {
    width: 10rem;
    height: auto;
    margin-right: 1rem;
  }

  .item-details {
    flex-grow: 1;
  }

  .quantity-controls {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 10%;
  }

  .quantity-controls button {
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    border: none;
    background-color: #ccc;
    cursor: pointer;
  }

  .quantity {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .sub-total {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 20%;
  }

  .price {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .total {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    margin-top: 2rem;
  }

  .total p {
    font-size: 1.5rem;
    margin-right: 1rem;
  }

  .total .price {
    font-size: 2rem;
    font-weight: bold;
  }
`;

export default Cart;
