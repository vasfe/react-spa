import styled from 'styled-components';

export const Page = styled.div`
  max-width: 800px;
  margin: 30px auto 0;
  animation: fadeIn 1s linear;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Quote = styled.p`
  padding: 10px;
  max-width: 500px;
  font-size: calc(16px + 0.3vw);
  font-weight: 600;
  letter-spacing: .5px;
  font-style: italic;
  margin: 40px auto;
`;

export const Line = styled.hr`
  height: 2px;
  border-style: hidden;
  background-color: #59deff39;   
  width: 60%;
`;

export const Header = styled.h1`
  font-size: calc(14px + 0.3vw);
  text-align: center;
  text-transform: capitalize;
`;

export const Paragraph = styled.p`
  width: 90%;
  font-size: calc(12px + 0.3vw);
  margin: 10px auto;
  text-align: justify;
`;