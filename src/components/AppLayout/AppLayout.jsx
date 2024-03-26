import { Suspense } from "react";
import { Outlet, Link } from "react-router-dom";
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
                <Link to='/'>
                  <Logo src={logo} alt='CamperVanRent' />
                </Link>
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
