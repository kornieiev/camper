import styled from "styled-components";
import { globalColor } from "../../styles/root";

export const LocationBoxDiv = styled.div`
  position: relative;

  width: 360px;
`;

export const LocationLabel = styled.label`
  font-weight: 500;
  color: ${globalColor.colorGrey};
  font-family: "Inter", "sens-serif";
`;

export const LocationInput = styled.input`
  font-family: "Inter", "sens-serif";
  border-radius: 10px;
  width: 320px;
  height: 56px;
  background-color: ${globalColor.colorWhiteGrey};
  padding-left: 38px;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: ${globalColor.colorBlack};
  margin-top: 8px;
  border: none;
  &:hover {
    outline: 1px solid ${globalColor.colorRed};
  }
  &:focus {
    outline: 1px solid ${globalColor.colorRed};
  }
`;

export const LocationSVG = styled.svg`
  position: absolute;
  width: 18px;
  height: 20px;
  transform: translateY(-200%) translateX(75%);
  fill: transparent;
  stroke: ${globalColor.colorBlack};
  background-color: ${globalColor.colorWhiteGrey};
`;
