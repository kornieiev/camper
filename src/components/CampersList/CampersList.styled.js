import styled from "styled-components";
import { globalColor } from "../../styles/root";

export const BoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  margin-bottom: 100px;
`;

export const LoadMoreBTN = styled.button`
  background-color: ${globalColor.colorRed};
  color: ${globalColor.colorWhite};
  width: 100%;
  padding: 16px 40px;
  border-radius: 200px;
  border: none;
`;
