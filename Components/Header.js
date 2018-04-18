import React from 'react';
import ReactDOM from 'react-dom';
import {Alert, Navbar, Nav, NavItem, Grid, Col,Row, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";

export default class Header extends React.Component{
    render(){
        console.log("PROPS=="+ this.props.children)
        return(
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                        <a href="#">Fahking News!</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/home"><NavItem>Home</NavItem></LinkContainer>
                        <LinkContainer to="/Categories"><NavItem>Categories</NavItem></LinkContainer>
                        <LinkContainer to="/data"><NavItem>M.O.M Speaks</NavItem></LinkContainer>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
                
            </div>
        )
    }
}
