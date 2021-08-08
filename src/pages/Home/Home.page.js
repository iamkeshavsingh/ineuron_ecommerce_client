import React from "react";
import Header from "../../components/Header/Header";
import ProductList from "../../components/ProductList/ProductList";
import Loader from '../../components/Loader/Loader'
import useProducts from "../../hooks/useProducts";

function Home() {

  var { products, error, isLoading } = useProducts();

  // var {products, isLoading, error } = useSelector(({ product }) => product)
  // var dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getProducts())
  // }, [])

  if (error) return null;

  if (isLoading) return <Loader />

  return (
    <React.Fragment>
      <Header />
      <ProductList products={products} />
    </React.Fragment>
  );
}

export default Home;
