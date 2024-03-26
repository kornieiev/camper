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
  console.log("title", title);
  console.log("link", link);

  const camper = useSelector(selectCampers);
  const [randomIndexes, setRandomIndexes] = useState([]);

  useEffect(() => {
    const intervals = [];
    const newRandomIndexes = Array.from(
      { length: camper.length },
      (_, index) => {
        const randomIndex = Math.floor(Math.random() * camper.length);
        intervals.push(
          setInterval(() => {
            const updatedIndex = Math.floor(Math.random() * camper.length);
            setRandomIndexes((prevIndexes) => {
              const newIndexes = [...prevIndexes];
              newIndexes[index] = updatedIndex;
              return newIndexes;
            });
          }, randomTime())
        );
        return randomIndex;
      }
    );
    setRandomIndexes(newRandomIndexes);

    return () => {
      intervals.forEach((intervalId) => clearInterval(intervalId));
    };
  }, []);

  const randomTime = () => {
    return Math.round(Math.random() * (8000 - 3000) + 3000);
  };
  return (
    <Container>
      {randomIndexes.map((index, i) => (
        <React.Fragment key={i}>
          <GridItem
            style={{
              borderBottomRightRadius: "30px",
              borderTopLeftRadius: "30px",
              backgroundImage: `url(${camper[index]?.gallery[0]})`,
            }}
          />
          {i === 3 && (
            <GridItemAccent>
              <GridItemProps>
                <Link to={link}>{title}</Link>
              </GridItemProps>
            </GridItemAccent>
          )}
        </React.Fragment>
      ))}
    </Container>
  );
}
