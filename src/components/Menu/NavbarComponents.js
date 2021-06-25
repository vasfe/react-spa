import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  padding: 5px 0 5px 0;
  background: white;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 600px) {
    width: 100%;
    height: auto;
    justify-content: space-between;
    padding: 10px 0;
  } 
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  animation: spin infinite 10s linear;
  @media screen and (max-width: 600px) {
    width: 40px;
    height: 40px;
    margin-left: 20px;
  } 
  @keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;

export const Bars = styled.img`
  width: 40px;
  height: 40px;
  display: none;
  margin-right: 20px;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    display: unset;
  } 
`;

export const NavMenu = styled.div`
  text-align: center; 
  padding: 0 8px;
  height: 50px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;
  z-index: 10;
  @media screen and (max-width: 600px) {
    color: white;
    position: absolute;
    top: 0;
    right: 0;
    width:50%;
    background: #fffffff4;
    flex-direction: column;
    justify-content: center;
    height: 40vh;
    padding: 1rem;
    animation: fadeIn 0.3s forwards;
    display: none;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
  }
  &.mobile{
    display: flex;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const NavLink = styled(Link)`
  float: left;
  margin: 0;
  height: 100%;
  letter-spacing: .5px;
  color: #59deff;
  font-weight: 1000;
  text-decoration: none;
  padding: 0 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  &.active {
    border-bottom: 4px solid #59deff;
  } 
  @media screen and (max-width: 600px) {
    &.active {
    border-left: 4px solid #59deff;
    border-bottom: none;
    } 
  }
`;