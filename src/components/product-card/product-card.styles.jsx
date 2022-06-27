import styled from 'styled-components';
import Popup from 'reactjs-popup';
import Button from '../button/button.component';

export const StyledPopup = styled(Popup)`

  &-overlay {
    background: rgba(0, 0, 0, 0.5);
  }

  &-content {
    margin: auto;
    width: 50%;
    padding: 5px;
    cursor: pointer;
    position: absolute;
    display: block;
    padding: 2px 5px;
    line-height: 20px;
    right: -10px;
    top: -10px;
    font-size: 24px;
    background: #ffffff;
    border-radius: 18px;
    opacity: 0.9;
    border: 1px solid #cfcece;

    @media only screen and (max-device-width : 800px) {
    width: 90%;
  }}
`;

export const ModalAction = styled.div`
  width: 100%;
  padding: 10px 5px;
  margin: auto;
  text-align: center;

  button {
    cursor: pointer;
    padding: 2px 5px;
    line-height: 20px;
    right: -10px;
    top: -10px;
    font-size: 16px;
    background: #ffffff;
    border: 2px solid #cfcece;
  }
`

export const ModalContainer = styled.div`
  font-size: 14px;


`;

export const ModalContent = styled.div`
  width: 100%;
  padding: 10px 5px;
  display: flex;
  justify-content: center;
`;

export const ModalImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`

export const ModalClose = styled.button`
  cursor: pointer;
  position: absolute;
  display: block;
  padding: 2px 5px;
  line-height: 20px;
  right: -10px;
  top: -10px;
  font-size: 24px;
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid #cfcece;
`;

export const ModalHeader = styled.h2`
  width: 100%;
  border-bottom: 1px solid gray;
  font-size: 18px;
  text-align: center;
  padding: 5px;
`

export const ProductCardContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
  @media screen and (max-width: 800px) {
    width: 40vw;
    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }
  `;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const AddButton = styled(Button)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
    font-size: 10px;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;  

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;  

  @media screen and (max-width: 800px) {
    font-size: 10px;
  }
`;

export const Price = styled.span`
  width: 10%;  
  text-align: right;

  @media screen and (max-width: 800px) {
    font-size: 10px;
  }
`;
