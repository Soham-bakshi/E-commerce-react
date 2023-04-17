import styled from 'styled-components';

const Loading = ({ message }) => {
  return (
    <Wrapper className="section section-center">
      <div className="loading"></div>
      <h2>{message}...</h2>
    </Wrapper>
  );
};

// styled components
const Wrapper = styled.div`
  display: block;
  text-align: center;
  width: 90vw;
  height: 80vh;
  color: var(--clr-white);
  h2 {
    margin-top: 2rem;
  }
`;

export default Loading;
