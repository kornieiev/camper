import styled, { createGlobalStyle } from "styled-components";
import { globalColor } from "../../styles/root";

export const Container = styled.div`
  width: 1440px;
  padding: 0 64px;
  /* margin: 0 64px; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: calc(100vh - 120px);
  gap: 15px;
  background-color: ${globalColor.colorWhiteGrey};
`;

export const GridItem = styled.div`
  border-radius: 30px;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: ease-in 800ms;
`;

export const GridItemAccent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${globalColor.colorRed};
  color: ${globalColor.colorWhite};
  margin-left: auto;
  margin-right: auto;
  border-radius: 30px;
  :hover {
    color: ${globalColor.colorWhite};
    transition: ease-in 250ms;
  }
`;

export const GridItemProps = styled.div`
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  width: 100%;
  padding: 100px 20px;
`;
