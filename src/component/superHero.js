import { Card, Container, Row, Col, Image } from "react-bootstrap";
import antmanimage from "../asset/superhero/antman.jpg";
import avengerimage from "../asset/superhero/avenger.jpg";
import batmanimage from "../asset/superhero/batman.jpg";
import robinhoodimage from "../asset/superhero/robinhood.jpg";
import spidermanimage from "../asset/superhero/spiderman.jpg";
import supermanimage from "../asset/superhero/superman.jpg";

const superhero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white ">SUPERHERO MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image src={antmanimage} alt="antman movie" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">dune movie</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below.</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          {/*  */}
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={avengerimage} alt="avenger movie" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">avenger movie</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below.</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          {/*  */}
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={batmanimage} alt="batman movie" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">batman movie</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below.</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          {/*  */}
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={robinhoodimage} alt="robinhood movie" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">robinhood movie</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below.</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          {/*  */}
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={supermanimage} alt="superman movie" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">superman movie</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below.</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          {/*  */}
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={spidermanimage} alt="spiderman movie" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">spiderman movie</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below.</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default superhero;
