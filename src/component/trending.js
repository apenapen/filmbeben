import { Card, Container, Row, Col, Image } from "react-bootstrap";
import duneimage from "../asset/trending/dune.jpg";
import Everythingimage from "../asset/trending/everything.jpg";
import infiniteimage from "../asset/trending/infinite.jpg";
import morbiusimage from "../asset/trending/morbius.jpg";
import jokerimage from "../asset/trending/joker.jpg";
import lightyearimage from "../asset/trending/lightyear.jpg";

const trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white ">TRENDING MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image src={duneimage} alt="dune movie" className="images" />
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
              <Image src={Everythingimage} alt="everything movie" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">everything movie</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below.</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          {/*  */}
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={infiniteimage} alt="infinite movie" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">infinite movie</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below.</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          {/*  */}
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={morbiusimage} alt="morbius movie" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">morbius movie</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below.</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          {/*  */}
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={lightyearimage} alt="lightyear movie" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">lightyear movie</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below.</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          {/*  */}
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={jokerimage} alt="joker movie" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">joker movie</Card.Title>
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
export default trending;
