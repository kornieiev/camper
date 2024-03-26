import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { globalColor } from "../../styles/root";

export const LayoutList = styled.ul`
  /* margin: 0 64px; */
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  background-color: ${globalColor.colorWhiteGrey};
`;

export const LayoutLogoItem = styled.li`
  margin: 10px 0px;
  margin-left: 80px;
`;

export const LayoutItem = styled.li`
  display: flex;
  justify-content: center;
  /* margin: 10px; */
  align-items: center;
`;

export const Logo = styled.img`
  width: 120px;
  height: 80px;
  /* margin: 5px 0; */
`;

export const NaviLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  border-radius: 30px;
  margin-left: 50px;
  margin-right: 8px;
  font-weight: 500;
  font-size: 26px;
  line-height: 1.5;
  margin: 10px;
`;
