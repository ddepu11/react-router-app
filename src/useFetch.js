import { useGlobalContext } from "./context";

import { useEffect } from "react";

const useFetch = (url) => {
  const { setCart } = useGlobalContext();

  async function fetchCart() {
    try {
      const res = await fetch(url);
      const { cart } = await res.json();
      setCart(cart);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCart();
  }, []);
};

export { useFetch };
