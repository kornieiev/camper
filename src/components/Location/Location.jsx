import React from "react";
import {
  LocationBoxDiv,
  LocationInput,
  LocationLabel,
  LocationSVG,
} from "./Location.styled.js";
import sprite from "../../assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectLocation } from "../../redux/filters/selectors.js";
import { changeLocation } from "../../redux/filters/filtersSlice.js";

export default function Location() {
  const dispatch = useDispatch();

  const location = useSelector(selectLocation);

  const handleChange = (e) => {
    dispatch(changeLocation(e.target.value));
  };

  return (
    <LocationBoxDiv>
      <LocationLabel htmlFor='location'>Location</LocationLabel>
      <LocationInput
        type='text'
        id='location'
        value={location}
        placeholder='City, Country'
        onChange={handleChange}
      />
      <LocationSVG>
        <use href={sprite + "#icon-location"} />
      </LocationSVG>
    </LocationBoxDiv>
  );
}
