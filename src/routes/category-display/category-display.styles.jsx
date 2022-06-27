import styled from 'styled-components'

export const CategoryDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;  

  @media only screen and (max-device-width : 800px) {
     align-items: center;
    }
`;

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 10px;
  row-gap: 20px;
`;

export const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
`;
