import React from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";

export default function Product() {
  const { cart } = useGlobalContext();
  const { id } = useParams();

  const prd = cart.length !== 0 ? cart.filter((item) => item.id === +id) : [];

  console.log(prd);
  return (
    <div className="product flex">
      {prd.length === 0 ? (
        <h2 className="loading">Loading...</h2>
      ) : (
        <>
          <img src={prd[0].imgSrc} alt={prd[0].title} />
          <p>{prd[0].title}</p>
          <span>&#8377;{prd[0].price}</span>
        </>
      )}
    </div>
  );
}
