import styled from 'styled-components';

export const FooterContainer = styled.div`
  background: white;
  display: flex;
  position: sticky;
  bottom: 0;
  justify-content: center;
`;

export const FooterLink = styled.a`
  display: flex;
  padding: 10px;
  &:hover {
    transition: 200ms ease-in;
    opacity: 50%;
  } 
`;

export const SocialLogo = styled.img`
  width: 30px;
`;