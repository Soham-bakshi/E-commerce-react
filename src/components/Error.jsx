import { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Error = ({ message }) => {
  const navigate = useNavigate();

  // functionality for redirect to home page
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  }, []);

  return (
    <Wrapper className="section section-center text-center">
      <h2>{message}...</h2>
      <h3>Redirecting to home page...</h3>
    </Wrapper>
  );
};

// styled components
const Wrapper = styled.div`
  width: 90vw;
  height: 80vh;
  color: var(--clr-white);
  h3 {
    margin: 4rem auto;
    color: var(--clr-red-dark);
  }
`;

export default Error;
