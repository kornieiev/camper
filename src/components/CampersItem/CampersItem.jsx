import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BTN,
  Container,
  Description,
  Descriptions,
  Fill,
  Img,
  Info,
  Location,
  Name,
  NamePrice,
  Price,
  Reviews,
  ReviewsLocation,
} from "./CampersItem.styled";
import sprite from "../../assets/sprite.svg";
import ModalWindow from "../ModalWindow/ModalWindow";
import { ButtonLike } from "../ButtonLike/ButtonLike";

export default function CampersItem({ camper, pathForModal }) {
  const {
    _id,
    name,
    price,
    rating,
    location,
    adults,
    engine,
    transmission,
    description,
    details,
    gallery,
    reviews,
  } = camper;

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";

    const modalUrl = `/${pathForModal}/${_id}`;
    navigate(modalUrl);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "visible";
  };

  return (
    <>
      <Container key={_id}>
        <Img src={gallery[0]} alt={name} />
        <Info>
          <NamePrice>
            <Name>{name}</Name>
            <Price>
              € {price}.00
              <ButtonLike item={camper} />
            </Price>
          </NamePrice>
          <ReviewsLocation>
            <Reviews>
              <svg
                style={{
                  width: "16px",
                  height: "16px",
                  marginRight: "4px",
                  stroke: "black",
                  fill: "white",
                }}
              >
                <use href={sprite + "#icon-star"} />
              </svg>
              {rating} ({reviews.length} Reviews)
            </Reviews>
            <Location>
              <svg
                style={{
                  width: "16px",
                  height: "16px",
                  marginRight: "4px",
                  stroke: "black",
                  fill: "white",
                }}
              >
                <use href={sprite + "#icon-location"} />
              </svg>
              {location}
            </Location>
          </ReviewsLocation>
          <Description>{description.slice(0, 60) + "..."}</Description>
          <Descriptions>
            <Fill>
              <svg
                style={{
                  width: "20px",
                  height: "20px",
                  marginRight: "8px",
                  fill: "black",
                }}
              >
                <use href={sprite + "#icon-adults"} />
              </svg>
              {adults} adults
            </Fill>
            <Fill>
              <svg
                style={{
                  width: "20px",
                  height: "20px",
                  marginRight: "8px",
                  stroke: "black",
                  fill: "white",
                }}
              >
                <use href={sprite + "#icon-automatic"} />
              </svg>
              {transmission}
            </Fill>
            <Fill>
              <svg
                style={{
                  width: "20px",
                  height: "20px",
                  marginRight: "8px",
                  fill: "black",
                }}
              >
                <use href={sprite + "#icon-petrol"} />
              </svg>
              {engine}
            </Fill>
            {details.kitchen && (
              <Fill>
                <svg
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "8px",
                    stroke: "black",
                    fill: "white",
                  }}
                >
                  <use href={sprite + "#icon-kitchen"} />
                </svg>
                Kitchen
              </Fill>
            )}
            <Fill>
              <svg
                style={{
                  width: "20px",
                  height: "20px",
                  marginRight: "8px",
                  stroke: "black",
                  fill: "white",
                }}
              >
                <use href={sprite + "#icon-beds"} />
              </svg>
              {details.beds} beds
            </Fill>
            {details.airConditioner && (
              <Fill>
                <svg
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "8px",
                    stroke: "black",
                    fill: "white",
                  }}
                >
                  <use href={sprite + "#icon-air-conditioner"} />
                </svg>
                AC
              </Fill>
            )}
          </Descriptions>
          <BTN type='submit' onClick={() => handleOpenModal(_id, camper)}>
            Show more
          </BTN>
        </Info>
      </Container>
      {isModalOpen && (
        <ModalWindow
          camperInfo={camper}
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          pathForModal={pathForModal}
        />
      )}
    </>
  );
}
