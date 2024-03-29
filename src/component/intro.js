import { Button, Col, Container, Row } from "react-bootstrap";

const intro = () => {
  return (
    <div className=" intro">
      <Container className="text-white text-center d-flex justify-content-center align-item-center ">
        <Row>
          <Col>
            <div className="title">NONTON GRATIS </div>
            <div className="title">GAK PAKE KARCIS</div>
            <div className="introButton mt-4 text-center">
              <Button variant="dark">LIHAT SEMUA LIST</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default intro;
