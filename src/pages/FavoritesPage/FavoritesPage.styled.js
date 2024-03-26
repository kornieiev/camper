import styled from "styled-components";
import { globalColor } from "../../styles/root";

export const Container = styled.div`
  /* width: 1440px; */
  /* margin: 0 32px; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  margin-bottom: 40px;
  color: ${globalColor.colorRed};
  font-weight: 500;
  font-size: 22px;
`;
