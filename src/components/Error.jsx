import styled from 'styled-components';

const Error = ({ message }) => {
  return (
    <Wrapper className="section section-center text-center">
      <h2>{message}...</h2>
    </Wrapper>
  );
};

// styled components
const Wrapper = styled.div`
  width: 90vw;
  height: 80vh;
  color: var(--clr-white);
`;

export default Error;
