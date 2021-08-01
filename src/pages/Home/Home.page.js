import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import ProductList from "../../components/ProductList/ProductList";
import { getProducts } from "../../store/actions/products/products.action";

function Home() {

  var products = useSelector(({ product }) => product.products)
  var dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <React.Fragment>
      <Header />
      <ProductList products={products} />
    </React.Fragment>
  );
}

export default Home;
