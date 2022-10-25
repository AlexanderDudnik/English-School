import React from "react";
import { Container, Card } from "react-bootstrap";
import Blog from "../img/Blog.jpg"

function Courses() {
  return (
    <>
      <Container>
        <div className="p-3">
          <Card style={{ width: "100%" }}>
            <Card.Body className="d-inline-flex align-items-center p-4">
              <div>
                <img
                  width={200}
                  height={200}
                  src={Blog}
                  className="me-5"
                  alt=""
                />
              </div>
              <div>
                <h5 className="d-flex justify-content-center">Blog post</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ullam?
                  Incidunt labore dolore quo, eaque quidem quibusdam assumenda aliquam pariatur
                  voluptate optio quaerat esse distinctio, cum ducimus earum? Facilis, necessitatibus.</p>
              </div>
            </Card.Body>
            <Card.Body className="d-inline-flex align-items-center p-4">
              <div>
                <img
                  width={200}
                  height={200}
                  src={Blog}
                  className="me-5"
                  alt=""
                />
              </div>
              <div>
                <h5 className="d-flex justify-content-center">Blog post</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ullam?
                  Incidunt labore dolore quo, eaque quidem quibusdam assumenda aliquam pariatur
                  voluptate optio quaerat esse distinctio, cum ducimus earum? Facilis, necessitatibus.</p>
              </div>
            </Card.Body>
            <Card.Body className="d-inline-flex align-items-center p-4">
              <div>
                <img
                  width={200}
                  height={200}
                  src={Blog}
                  className="me-5"
                  alt=""
                />
              </div>
              <div>
                <h5 className="d-flex justify-content-center">Blog post</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ullam?
                  Incidunt labore dolore quo, eaque quidem quibusdam assumenda aliquam pariatur
                  voluptate optio quaerat esse distinctio, cum ducimus earum? Facilis, necessitatibus.</p>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}
export default Courses