import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart, increment, decrement } from '../store';
import { Link } from 'react-router-dom';
import { MdDeleteForever } from 'react-icons/md';
import { FaPlus, FaMinus } from 'react-icons/fa';

function Cart() {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => {
    return state.cart_data;
  });

  const { cartItems, shippingFee, subtotal } = cartState;

  if (cartItems.length < 1) {
    return (
      <Wrapper className="page-100">
        <div className="empty">
          <h2>Your cart is empty</h2>
          <Link to="/" className="btn">
            fill it
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <main>
      <Wrapper className="page">
        <WrapperContent className="section section-center">
          <WrapperCol>
            <div className="content">
              <h5>Item</h5>
              <h5>Price</h5>
              <h5>Quantity</h5>
              <h5>Subtotal</h5>
              <span></span>
            </div>
            <hr />
          </WrapperCol>

          {cartItems.map((item, index) => (
            <WrapperItem key={item.id}>
              <div className="title">
                <img src={item.thumbnail} alt={item.title} />

                <div>
                  <h5 className="name">{item.title}</h5>
                  <h5 className="price-small">{item.price}</h5>
                </div>
              </div>
              <h5 className="price">{item.price}</h5>

              <WrapperButton className="amount-btns">
                <button
                  type="button"
                  className="amount-btn"
                  onClick={() => dispatch(decrement({ item, index }))}
                >
                  <FaMinus />
                </button>
                <h2 className="amount">{item.qty}</h2>
                <button
                  className="amount-btn"
                  type="button"
                  onClick={() => dispatch(increment({ item, index }))}
                >
                  <FaPlus />
                </button>
              </WrapperButton>
              <h5 className="subtotal">{item.price * item.qty}</h5>
              <button
                type="button"
                className="remove-btn"
                onClick={() => dispatch(removeFromCart(item))}
              >
                <MdDeleteForever />
              </button>
            </WrapperItem>
          ))}

          <hr />

          <div className="link-container">
            <Link to="/" className="link-btn">
              Continue Shopping
            </Link>
            <button
              type="button"
              className="link-btn clear-btn"
              onClick={() => dispatch(clearCart())}
            >
              Clear Shopping Cart
            </button>
          </div>

          <WrapperTotals>
            <div>
              <article className="cart-order-content">
                <h5>
                  Subtotal : <span>{subtotal}</span>
                </h5>
                <p>
                  Shipping fee : <span>{shippingFee}</span>
                </p>
                <hr />
                <h4>
                  Order Total : <span>{subtotal + shippingFee}</span>
                </h4>
              </article>
            </div>
          </WrapperTotals>
        </WrapperContent>
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

const WrapperContent = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`;

const WrapperCol = styled.div`
  display: none;
  @media (min-width: 776px) {
    display: block;
    .content {
      display: grid;
      grid-template-columns: 316px 1fr 1fr 1fr auto;
      justify-items: center;
      column-gap: 1rem;
      h5 {
        color: var(--clr-grey-5);
        font-weight: 400;
      }
    }

    span {
      width: 2rem;
      height: 2rem;
    }
    hr {
      margin-top: 1rem;
      margin-bottom: 3rem;
    }
  }
`;

const WrapperItem = styled.article`
  .subtotal {
    display: none;
  }
  .price {
    display: none;
  }
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 75px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;
  .title {
    grid-template-rows: 75px;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  h5 {
    font-size: 0.75rem;
    margin-bottom: 0;
  }

  .color {
    color: var(--clr-grey-5);
    font-size: 0.75rem;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      background: red;
      margin-left: 0.5rem;
      border-radius: var(--radius);
    }
  }
  .price-small {
    color: var(--clr-primary-5);
  }
  .amount-btns {
    width: 75px;
    button {
      width: 1rem;
      height: 0.5rem;
      font-size: 0.75rem;
    }
    h2 {
      font-size: 1rem;
    }
  }
  .remove-btn {
    color: var(--clr-white);
    background: transparent;
    border: transparent;
    letter-spacing: var(--spacing);
    background: var(--clr-red-dark);
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    font-size: 0.75rem;
    cursor: pointer;
  }
  @media (min-width: 776px) {
    .subtotal {
      display: block;
      margin-bottom: 0;
      color: var(--clr-grey-5);
      font-weight: 400;
      font-size: 1rem;
    }
    .price-small {
      display: none;
    }
    .price {
      display: block;
      font-size: 1rem;
      color: var(--clr-primary-5);
      font-weight: 400;
    }
    .name {
      font-size: 0.85rem;
    }
    .color {
      font-size: 0.85rem;
      span {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;
    img {
      height: 100%;
    }
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
    .amount-btns {
      width: 100px;
      button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`;

const WrapperButton = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h2 {
    margin-bottom: 0;
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
  h2 {
    margin-bottom: 0;
  }
`;

const WrapperTotals = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`;

export default Cart;
