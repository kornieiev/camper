import { useState } from "react";
import CampersItem from "../CampersItem/CampersItem";
import { BoxDiv, LoadMoreBTN } from "./CampersList.styled";

export default function CampersList({ campers, pathForModal }) {
  const [campersQty, setCampersQty] = useState(4);

  const currentCampers = campers.slice(0, campersQty);

  const loadMore = () => {
    setCampersQty(campersQty + 4);
  };

  return (
    <BoxDiv>
      <ul>
        {currentCampers.map((camper) => (
          <CampersItem
            key={camper._id}
            camper={camper}
            pathForModal={pathForModal}
          />
        ))}
      </ul>
      {campersQty < campers.length && (
        <LoadMoreBTN onClick={loadMore}>Load more...</LoadMoreBTN>
      )}
    </BoxDiv>
  );
}
