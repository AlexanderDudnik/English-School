import React from "react";
import { Nav, Tab, Row, Col, Container } from "react-bootstrap";

function Blog() {
  return (
    <div>
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
          <Row className="mt-5">
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">First</Nav.Link>
                  <Nav.Link eventKey="second">Second</Nav.Link>
                  <Nav.Link eventKey="third">Third</Nav.Link>
                  <Nav.Link eventKey="fourth">Fourth</Nav.Link>
                  <Nav.Link eventKey="fifth">Fifth</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <img src="https://eduma.thimpress.com/demo-main/wp-content/uploads/sites/95/2015/12/courses-5.jpg" alt="photo" />
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo maiores dolorum eos id! Sunt, amet consectetur! Eum est nostrum quam voluptatum sit eaque, dicta harum aperiam voluptas distinctio repellendus nulla!</p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img src="https://eduma.thimpress.com/demo-main/wp-content/uploads/sites/95/2015/12/courses-2.jpg" alt="photo" />
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo maiores dolorum eos id! Sunt, amet consectetur! Eum est nostrum quam voluptatum sit eaque, dicta harum aperiam voluptas distinctio repellendus nulla!</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img src="https://eduma.thimpress.com/demo-main/wp-content/uploads/sites/95/2015/06/courses-13.jpg" alt="photo" />
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo maiores dolorum eos id! Sunt, amet consectetur! Eum est nostrum quam voluptatum sit eaque, dicta harum aperiam voluptas distinctio repellendus nulla!</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img src="https://eduma.thimpress.com/demo-main/wp-content/uploads/sites/95/2015/12/courses-6.jpg" alt="photo" />
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo maiores dolorum eos id! Sunt, amet consectetur! Eum est nostrum quam voluptatum sit eaque, dicta harum aperiam voluptas distinctio repellendus nulla!</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img src="https://eduma.thimpress.com/demo-main/wp-content/uploads/sites/95/2015/06/courses-8.jpg" alt="photo" />
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo maiores dolorum eos id! Sunt, amet consectetur! Eum est nostrum quam voluptatum sit eaque, dicta harum aperiam voluptas distinctio repellendus nulla!</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>    
        </Tab.Container>
      </Container>
    </div>
  );
}

export default Blog