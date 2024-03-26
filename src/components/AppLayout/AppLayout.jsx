import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "../../styles/GlobalStyles";
import { GlobalStyles } from "../../styles/GlobalStyles";
import logo from "../../assets/logo-min.png";

import {
  LayoutItem,
  LayoutList,
  LayoutLogoItem,
  Logo,
  NaviLink,
} from "./AppLayout.styled";
import Loader from "../Loader/Loader";

export default function AppLayout() {
  return (
    <>
      <header>
        <Container>
          <nav>
            <LayoutList>
              <LayoutLogoItem>
                <a href='/'>
                  <Logo width='100px' src={logo} alt='CamperVanRent' />
                </a>
              </LayoutLogoItem>
              <LayoutItem>
                <NaviLink to='/catalog'>Catalog</NaviLink>
              </LayoutItem>
              <li>
                <NaviLink to='/favorites'>Favorites</NaviLink>
              </li>
            </LayoutList>
          </nav>
        </Container>
      </header>

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <GlobalStyles />
    </>
  );
}
