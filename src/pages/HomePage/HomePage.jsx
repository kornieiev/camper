import React from "react";
import Plug from "../../components/Plug/Plug";

export default function HomePage() {
  const title = "Embark on Your Journey Today!";
  const link = "/catalog";
  return (
    <>
      <Plug title={title} link={link} />
    </>
  );
}
