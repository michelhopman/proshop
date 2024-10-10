import { Link, useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import ProductsCarousel from "../components/ProductsCarousel";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Meta from "../components/Meta";

export default function HomeScreen() {
  const { keyword, pageNumber } = useParams();
  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta />
          {keyword ? (
            <>
              <Link to="/" className="btn btn-light mb-4">
                Go Back
              </Link>
              <h1>
                Search Results for <i>{`"${keyword}"`}</i>
              </h1>
            </>
          ) : (
            <>
              <ProductsCarousel />
              <h1>Latest Products</h1>
            </>
          )}

          <Row>
            {data.products.map((product) => {
              return (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              );
            })}
          </Row>
          <Row>
            <Paginate
              pages={data.pages}
              page={data.page}
              keyword={keyword ? keyword : ""}
            />
          </Row>
        </>
      )}
    </>
  );
}
