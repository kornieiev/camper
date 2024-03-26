import React from "react";
import { FiltersBlockWrap } from "./FiltersBlock.styled";
import Location from "../Location/Location";
import Filters from "../Filters/Filters";

export function FiltersBlock() {
  return (
    <FiltersBlockWrap>
      <Location />
      <Filters />
    </FiltersBlockWrap>
  );
}
