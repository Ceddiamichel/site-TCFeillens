import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import imgActu from "../assets/img/imgActu";
import imgAnim from "../assets/img/imgAnim";
import { IconContext } from "react-icons";
import { FaChevronRight } from "react-icons/fa";
import saveDate from "../assets/img/imgHeader/save-date-red.png";
import tablePgmAVenir from "../_params/tablePgmAVenir";

const Accueil = () => {
  let gap = undefined;
  let today = Date.now();

  const days = tablePgmAVenir.map((pgm) => {
    gap = today - Date.parse(pgm.date);
    return Math.floor(gap / (24 * 60 * 60 * 1000)); // calcul du nb de jours (floor => donne l'entier avant la virgule).
  });

  return (
    <div className="mc-fond-ecran">
      <Container fluid>
        <Row>
          <h3 className="pt-3">Programmes à venir</h3>
          {tablePgmAVenir.map((pgm, index) => (
            <Col xs={5} md={3} className="p-2 border-end">
              <Card className="mb-2" key={index}>
                <Card.Img variant="top" src={imgAnim[index]} />
                <Card.Img
                  className="position-absolute ms-2 mt-2 w-25 bg-light"
                  variant="top"
                  src={saveDate}
                />
                <Card.Body className={pgm.couleur}>
                  <Card.Title>
                    {pgm.dateText}
                    <Badge bg="secondary" className="ms-2">
                      {days[index]} j
                    </Badge>
                  </Card.Title>
                  <Card.Text className="my-1 fw-bold text-decoration-underline">
                    {pgm.animation}
                  </Card.Text>
                  <Card.Text className="lh-1">{pgm.texte}</Card.Text>
                  <Button
                    role="button"
                    variant="light"
                    href="/animations/badminton"
                    className="shadow border border-2"
                  >
                    <span className="pe-2">Accéder</span>
                    <IconContext.Provider value={{ size: "1em" }}>
                      <FaChevronRight />
                    </IconContext.Provider>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          <Col xs={6} className="p-2">
            <h4 className="text-light bg-secondary px-2">Actualités</h4>
            <Carousel fade className="text-light p-1">
              <Carousel.Item>
                <img
                  className="d-block w-100 border border-2"
                  src={imgActu[0]}
                  alt="First slide"
                />
                <div className="border p-2 bg-secondary border-top-0 border-2">
                  <h5>Balle mouillée en couleur</h5>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                  <br />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 border border-2"
                  src={imgActu[1]}
                  alt="Second slide"
                />
                <div className="border p-2 bg-dark border-top-0 border-2">
                  <h5>Court Central US Open</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <br />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 border border-2"
                  src={imgActu[2]}
                  alt="Third slide"
                />
                <div className="border p-2 bg-dark border-top-0 border-2">
                  <h5>Match de tennis féminin</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                  <br />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 border border-2"
                  src={imgActu[3]}
                  alt="Balle mouillée noire et blanc"
                />
                <div className="border p-2 bg-dark border-top-0 border-2">
                  <h5>Third slide label</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                  <br />
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Accueil;
