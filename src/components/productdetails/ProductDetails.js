import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";

export default function ProductDetails() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    console.log(currentParams); // get new values onchange
  }, [searchParams]);

  return <h1>You are seeing the details of  product </h1>;
}
