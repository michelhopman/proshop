import { Container, Row, Col, Button } from "react-bootstrap";
import { useMoveBack } from "../hooks/useMoveBack";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <Container>
      <Row>
        <Col>
          <h1>The page you are looking for could not be found 😢</h1>
          <Button onClick={moveBack} size="large" variant="primary">
            &larr; Go back
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default PageNotFound;
