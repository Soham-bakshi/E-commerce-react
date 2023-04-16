import styled from 'styled-components';

const Loading = () => {
  return (
    <Wrapper className="section section-center">
      <div className="loading"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90vw;
  height: 90vh;
`;

export default Loading;
