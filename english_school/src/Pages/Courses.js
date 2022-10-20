import React from "react";
import { Col, Container, Row, Media } from "react-bootstrap";
import Blog from "../img/Blog.jpg"

function Courses() {
  return (
    <>
      <Container>
        <Row>
          <Col md="9">
            <Media>
              <img 
              src={Blog} 
              alt="" 
              className="mg-3"
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ullam? Incidunt labore dolore quo, eaque quidem quibusdam assumenda aliquam pariatur voluptate optio quaerat esse distinctio, cum ducimus earum? Facilis, necessitatibus.</p>
              </Media.Body>
            </Media>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Courses