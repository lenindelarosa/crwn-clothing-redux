import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;  

  @media only screen and (max-device-width : 800px) {
     align-items: center;
    }
`;

export const Title = styled.span`
  font-size: 30px;
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 20px;  
  row-gap: 10px;

  @media only screen and (max-device-width : 800px) {
      width: 100%;
      grid-template-columns: 1fr 1fr;
    }
`;
