import React from "react";
import Header from "../../components/Header/Header";
import ProductList from "../../components/ProductList/ProductList";
import productData from './Products.data'

function Home() {
  return (
    <React.Fragment>
      <Header />
      <ProductList products={productData} />
    </React.Fragment>
  );
}

export default Home;
