import React from "react";
import { Button, Card, Container, CardGroup } from "react-bootstrap";
import CarouselBox from "../Components/CarouselBox";
import card1 from "../img/Card1.jpg"
import card2 from "../img/Card2.jpg"
import card3 from "../img/Card3.jpg"


function Home() {
  return (
    <>
      <CarouselBox />
      <Container >
        <h2 className="text-center m-4">Our team</h2>
        <CardGroup className="m-5" >

          <Card bg="warning" className="m-1">
            <Card.Img
              variant="top"
              src={card1}
            />
            <Card.Body>
              <Card.Title className="text-center">Developers</Card.Title>
              <Card.Text class="text-dark">
                Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, tempore.
                Iste reprehenderit, eos aliquam repellendus perspiciatis totam, tenetur, dolores a in
                facilis perferendis ipsum sunt! Reprehenderit similique soluta asperiores doloribus.
              </Card.Text>
              <Button variant="dark">About team</Button>
            </Card.Body>
          </Card>

          <Card bg="warning" className="m-1">
            <Card.Body>
              <Card.Title className="text-center" >Developers</Card.Title>
              <Card.Text class="text-dark">
                Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, tempore.
                Iste reprehenderit, eos aliquam repellendus perspiciatis totam, tenetur, dolores a in
                facilis perferendis ipsum sunt! Reprehenderit similique soluta asperiores doloribus.
              </Card.Text>
              <Button variant="dark">About team</Button>
            </Card.Body>
            <Card.Img
              variant="bottom"
              src={card2}
            />
          </Card>

          <Card bg="warning" className="m-1">
            <Card.Img
              variant="top"
              src={card3}
            />
            <Card.Body>
              <Card.Title className="text-center" >Developers</Card.Title>
              <Card.Text class="text-dark">
                Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, tempore.
                Iste reprehenderit, eos aliquam repellendus perspiciatis totam, tenetur, dolores a in
                facilis perferendis ipsum sunt! Reprehenderit similique soluta asperiores doloribus.
              </Card.Text>
              <Button variant="dark" class="text-center">About team</Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </>
  );
}

export default Home;