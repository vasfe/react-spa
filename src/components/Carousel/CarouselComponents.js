import styled from 'styled-components';

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  display:block;
`;

export const ImageContainer = styled.div`
  position: relative;
  margin: auto;
  margin-top: 10px;
  max-width: 500px;
  max-height: 333px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
  border-radius: 10px;
  overflow: hidden;
  `;

export const CarouselButton = styled.button`
  position: absolute;
  height:50%;
  background: #ffffff8f;
  border: none;
  color: #868686;
  transform: scale( 1, 2) translateY(25%);
`;

export const ImageCredit = styled.div`
  background: #0000008f;
  color: white;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 90%;
  left:5%;
  border-radius: 5px 5px 0 0 ;
  font-size: 10px;;
`;

export const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 20px 0;
`;

export const SmallImage = styled.img`
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
  border-radius: 5px;
  width: 100px;
  height: 60px;
  margin: 7px;
`;
