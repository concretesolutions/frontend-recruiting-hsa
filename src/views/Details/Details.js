import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const Details = () => {
  const { user } = useContext(GlobalContext);
  console.log("recibido: ", user);
  return <div>Details</div>;
};

export default Details;
