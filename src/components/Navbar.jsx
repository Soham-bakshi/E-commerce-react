import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CartButtons from './CartButtons';
import { FaBars } from 'react-icons/fa';
import { links } from '../utils/constants';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavContainer>
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <span>E-COMMERCE</span>
            </Link>
            <button type="button" className="nav-toggle" onClick={handleClick}>
              <FaBars />
            </button>
          </div>
          <ul className="nav-links">
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
          <CartButtons />
        </div>
      </NavContainer>

      <SidebarContainer>
        <aside className={`${isOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
          <div className="sidebar-header">
            <span>E-COMMERCE</span>
            <button type="button" className="close-btn" onClick={handleClick}>
              <FaTimes />
            </button>
          </div>
          <ul className="links">
            {links.map(({ id, url, text }) => {
              return (
                <li key={id}>
                  <Link to={url} onClick={handleClick}>
                    {text}
                  </Link>
                </li>
              );
            })}
            {/* <li>
              <Link to="/cart" onClick={() => setIsOpen(!isOpen)}>
                cart
              </Link>
            </li> */}
          </ul>
          <CartButtons handleClick={handleClick} />
        </aside>
      </SidebarContainer>
    </>
  );
}

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--clr-white);
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-black);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  .nav-header span {
    font-weight: 900;
    font-size: 1.2rem;
    color: var(--clr-black);
    text-decoration-line: underline overline;
    text-decoration-color: var(--clr-red-dark);
    text-decoration-thickness: 4px;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-black);
        font-size: 1.2rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-red-dark);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

const SidebarContainer = styled.div`
  text-align: center;
  background: var(--clr-white);
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Navbar;
