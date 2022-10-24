import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import Blog from "../img/Blog.jpg"

function Courses() {
  return (
    <>
      <Container>
        <Row>
          <Col md="9">
            <Card className="mg-5 ">
              <img 
              width={150}
              height={150}
              src={Blog} 
              alt="" 
              className="mg-3"
              />
              <Card.Body>
                <h5>Blog post</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ullam? Incidunt labore dolore quo, eaque quidem quibusdam assumenda aliquam pariatur voluptate optio quaerat esse distinctio, cum ducimus earum? Facilis, necessitatibus.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Courses