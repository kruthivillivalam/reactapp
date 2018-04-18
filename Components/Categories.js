import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Components/Header';
import {Alert, Navbar, Nav, NavItem, Grid, Col,Row, Image} from 'react-bootstrap';


export default class Categories extends React.Component{
    render(){
        return(
            <div>
                <Header>  <div>
                    <div>ele1="Home"</div>
                <div> ele2="Categories"</div>
                </div>
                </Header>
                
                <Component1/>
            </div>
        )
    }
}

class Component1 extends React.Component{
    render(){
        return(
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={18} md={12}>
                            <h2>Droom just launched a catchy new music video which will take you back to your childhood dreams!</h2>
                            
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <p>
                        When we were children, we had a million dreams. It ranged from having our very own 2 storey house with a heated jacuzzi to travelling the world to owning a billion dollar business. However, if there was one common dream which all of us had, that was owning a high end luxury car! We have all dreamt a million dreams, but only a few of them actually come true. Either we forget about those aspirations, or we just accept that they aren’t for us. Droom has caught on to this insight, and has based their latest brand campaign around it.
Droom, the online marketplace for buying and selling of used and new automobiles has created a proposition of owning the luxury car that you always wanted at a price that wouldn’t be ‘aukaat ke bahar’. To convey the message they have used a very unique idea.
A catchy jingle, animation and a relatable protagonist – it’s the perfect ingredients to catch the user’s attention. The video revolves around Bittu and his dream of owning a luxury car ever since he was a child, and how he finally ends up getting one. All this, backed by a catchy jingle with equally interesting lyrics. With over a million views already in less than a week, this video has already received a thumbs up from the users.
                        </p>
                    </Row>
                </Grid>
                
            </div>
        );
    }
}