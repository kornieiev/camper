import React from "react";
import {
  Container,
  GridItem,
  GridItemAccent,
  GridItemProps,
} from "./Plug.styled";
import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/catalog/selectors";

export default function Plug({ title }) {
  const camper = useSelector(selectCampers);

  return (
    <Container>
      <GridItem
        style={{
          borderBottomRightRadius: "60px",
          borderTopLeftRadius: "60px",
          backgroundImage: `url(${camper[0]?.gallery[0]})`,
        }}
      ></GridItem>
      <GridItem
        style={{
          borderBottomLeftRadius: "60px",
          borderBottomRightRadius: "60px",
          backgroundImage: `url(${camper[1]?.gallery[0]})`,
        }}
      ></GridItem>
      <GridItem
        style={{
          borderBottomLeftRadius: "60px",
          borderTopRightRadius: "60px",
          backgroundImage: `url(${camper[2]?.gallery[0]})`,
        }}
      ></GridItem>
      <GridItem
        style={{
          borderTopRightRadius: "60px",
          borderBottomRightRadius: "60px",
          backgroundImage: `url(${camper[3]?.gallery[0]})`,
        }}
      ></GridItem>
      <GridItemAccent
        style={{
          borderRadius: "60px",
        }}
      >
        <GridItemProps>{title}</GridItemProps>
      </GridItemAccent>
      <GridItem
        style={{
          borderTopLeftRadius: "60px",
          borderBottomLeftRadius: "60px",
          backgroundImage: `url(${camper[6]?.gallery[0]})`,
        }}
      ></GridItem>
      <GridItem
        style={{
          borderBottomLeftRadius: "60px",
          borderTopRightRadius: "60px",
          backgroundImage: `url(${camper[7]?.gallery[0]})`,
        }}
      ></GridItem>
      <GridItem
        style={{
          borderTopLeftRadius: "60px",
          borderTopRightRadius: "60px",
          backgroundImage: `url(${camper[8]?.gallery[0]})`,
        }}
      ></GridItem>
      <GridItem
        style={{
          borderTopLeftRadius: "60px",
          borderBottomRightRadius: "60px",

          backgroundImage: `url(${camper[9]?.gallery[0]})`,
        }}
      ></GridItem>
    </Container>
  );
}
