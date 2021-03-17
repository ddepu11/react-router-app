import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
export default function Cart() {
  const { cart } = useGlobalContext();

  return (
    <div className="cart card">
      <h1>Products:</h1>
      <ul>
        {cart.map((item, index) => {
          return (
            <li key={index} className="li flex">
              <p>{item.title}</p>
              <Link className="detail" to={`/product/${item.id}`}>
                Details
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
