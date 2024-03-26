import styled from "styled-components";
import { globalColor } from "../../styles/root";

export const LocationBoxDiv = styled.div`
  width: 360px;
`;

export const LocationLabel = styled.label`
  position: relative;
  font-weight: 500;
  color: ${globalColor.colorGrey};
  font-family: "Inter", "sens-serif";
`;

export const LocationInput = styled.input`
  font-family: "Inter", "sens-serif";
  position: relative;
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
    outline: none;
  }
  &:focus {
    outline: none;
  }
`;

export const LocationSVG = styled.svg`
  position: absolute;
  width: 18px;
  height: 20px;
  top: 230px;
  left: 140px;
  transform: translateY(-50%);
  fill: transparent;
  stroke: ${globalColor.colorBlack};
  background-color: ${globalColor.colorWhiteGrey};
`;
