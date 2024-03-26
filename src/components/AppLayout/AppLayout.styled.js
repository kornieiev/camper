import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { globalColor } from "../../styles/root";

export const LayoutList = styled.ul`
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${globalColor.colorWhiteGrey};
`;

export const LayoutLogoItem = styled.li`
  margin: 10px 0px;
`;

export const LayoutItem = styled.li`
  display: flex;
  justify-content: center;
  margin: 10px;
  align-items: center;
`;

export const Logo = styled.img`
  width: 150px;
`;

export const NaviLink = styled(NavLink)`
  margin-left: 50px;
  margin-right: 8px;
  font-weight: 500;
  font-size: 26px;
  line-height: 1.5;
  color: ${globalColor.colorGrey};
`;
