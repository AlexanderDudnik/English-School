import { FormControl, Nav, Navbar, Container, Button, Form } from "react-bootstrap";
import logo from "../img/logo.png"
import"./Header.css"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

import Home from '../Pages/Home'
import Courses from '../Pages/Courses'
import Blog from '../Pages/Blog'
import About from '../Pages/About'
import Contacts from '../Pages/Contacts'

function Header() {
    return(
        <>
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav" className="navbar_menu">
                        <Navbar.Brand href="/">
                            <img 
                            src={logo} 
                            height="37"
                            width="157"
                            className="d-inline-block align-top"
                            alt="Logo"
                            />
                        </Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link className="link_header" href="/">Home</Nav.Link>
                            <Nav.Link className="link_header" href="/courses">Courses</Nav.Link>
                            <Nav.Link className="link_header" href="/blog">Blog</Nav.Link>
                            <Nav.Link className="link_header" href="/About">About us</Nav.Link>
                            <Nav.Link className="link_header" href="/contacts">Contacts</Nav.Link>
                        </Nav>
                        <Form className="header_form">
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                            />
                            <Button variant="warning">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/courses" element={<Courses/>}/>
                    <Route exact path="/blog" element={<Blog/>}/>
                    <Route exact path="/About" element={<About/>}/>
                    <Route exact path="/contacts" element={<Contacts/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default Header