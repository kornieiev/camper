import React, { useEffect, useState } from "react";
import {
  Container,
  GridItem,
  GridItemAccent,
  GridItemProps,
} from "./Plug.styled";
import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/catalog/selectors";
import { Link } from "react-router-dom";

export default function Plug({ title, link }) {
  const camper = useSelector(selectCampers);

  const initialUrl = {
    0: `url(${camper[0]?.gallery[0]})`,
    1: `url(${camper[1]?.gallery[0]})`,
    2: `url(${camper[2]?.gallery[0]})`,
    3: `url(${camper[3]?.gallery[0]})`,
    4: `url(${camper[4]?.gallery[0]})`,
    5: `url(${camper[5]?.gallery[0]})`,
    6: `url(${camper[6]?.gallery[0]})`,
    7: `url(${camper[7]?.gallery[0]})`,
    8: `url(${camper[8]?.gallery[0]})`,
    9: `url(${camper[9]?.gallery[0]})`,
    10: `url(${camper[10]?.gallery[0]})`,
    11: `url(${camper[11]?.gallery[0]})`,
    12: `url(${camper[12]?.gallery[0]})`,
  };

  const randomTime = () => {
    return Math.round(Math.random() * (4000 - 2000) + 2000);
  };

  setInterval(() => {
    const idx = Math.floor(Math.random() * 7);

    const img = document.querySelector(`#i${idx}`);

    const randomeValue = Math.floor(Math.random() * 11);

    let newUrl = initialUrl[`${randomeValue}`];

    if (newUrl.includes("undefined")) {
      newUrl = "url(https://ftp.goit.study/img/campers-test-task/9-1.webp)";
    }

    img.style.backgroundImage = newUrl;
  }, randomTime());

  return (
    <Container>
      <GridItem
        id='i0'
        style={{
          borderBottomRightRadius: "30px",
          borderTopLeftRadius: "30px",
          backgroundImage: `url(${camper[0]?.gallery[0]})`,
        }}
      />
      <GridItem
        id='i1'
        style={{
          borderBottomRightRadius: "30px",
          borderTopLeftRadius: "30px",
          backgroundImage: `url(${camper[1]?.gallery[0]})`,
        }}
      />
      <GridItem
        id='i2'
        style={{
          borderBottomRightRadius: "30px",
          borderTopLeftRadius: "30px",
          backgroundImage: `url(${camper[2]?.gallery[0]})`,
        }}
      />
      <GridItem
        id='i3'
        style={{
          borderBottomRightRadius: "30px",
          borderTopLeftRadius: "30px",
          backgroundImage: `url(${camper[3]?.gallery[0]})`,
        }}
      />
      <GridItemAccent>
        <Link to={link}>
          <GridItemProps>{title}</GridItemProps>
        </Link>
      </GridItemAccent>
      <GridItem
        id='i4'
        style={{
          borderBottomRightRadius: "30px",
          borderTopLeftRadius: "30px",
          backgroundImage: `url(${camper[4]?.gallery[0]})`,
        }}
      />

      <GridItem
        id='i5'
        style={{
          borderBottomRightRadius: "30px",
          borderTopLeftRadius: "30px",
          backgroundImage: `url(${camper[5]?.gallery[0]})`,
        }}
      />
      <GridItem
        id='i6'
        style={{
          borderBottomRightRadius: "30px",
          borderTopLeftRadius: "30px",
          backgroundImage: `url(${camper[6]?.gallery[0]})`,
        }}
      />
      <GridItem
        id='i7'
        style={{
          borderBottomRightRadius: "30px",
          borderTopLeftRadius: "30px",
          backgroundImage: `url(${camper[7]?.gallery[0]})`,
        }}
      />
    </Container>
  );
}
