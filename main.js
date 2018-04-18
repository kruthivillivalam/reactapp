import React from 'react';
import ReactDOM from 'react-dom';
import {Alert, Navbar, Nav, NavItem, Grid, Col,Row, Image} from 'react-bootstrap';
import Header from './Components/Header';
import Routes from './Components/Routes'
//import 'bootstrap';
//import { Button } from '../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-bootstrap';
//import App from './App.jsx';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: "Hello There!!"
        }
        this.update=this.update.bind(this);
    }
    update(){
        this.setState({data: "My name is Kruthi"})
    }
    render(){
        console.log("In App Component");
        return(
            <div>
                <Header/>
                <Component1 padding="25px"/>
                <Component2 padding="25px"/>
            
            </div>
        );
    }
}



class Component1 extends React.Component{
    render(){
        var styles={
            width: '90%',
           
        };
       var padding={
           padding: this.props.padding
       }
        return(
            <div style={padding}>
            <Grid fluid="true">
                <Row className="show-grid" >
                    <Col xs={12} md={6}><Image src="assets/sample.png" style={styles} rounded responsive/></Col>
                    <Col xs={6} md={6}> <a href="#"><h1> Droom just launched a catchy new music video which will take you back to your childhood dreams!</h1></a>
<p>When we were children, we had a million dreams. It ranged from having our very own 2 storey house with a heated jacuzzi to travelling the world to owning a billion dollar business. However, if there was one common dream which all of us had, that was owning a high end luxury car! We have all…</p>
<button type="button" class="btn btn-primary">Continue Reading</button></Col>
                </Row>

            </Grid>
           
                   
            </div>
        )
    }
}

class Component2 extends React.Component{
    constructor(props){
        super(props);
       // var padding = this.props.padding;
    };
    render(){
        var styles={
            width: '90%',
            padding: '15px'
           
        };
        var headerStyle={
            fontSize:"30px"
        };
        var padding={
            paddingTop: this.props.padding
        }
        
        return(
            <div style={padding}>
                <Grid fluid="true">
                    <Row>
                        <Col xs={3} md={3}>
                            <Image src="assets/big-rock.jpg" style={styles} rounded responsive/>
                            <h1 style={headerStyle}><a href="#">The Latest Video Campaign By BigRock Is Winning Hearts With Its Lyrical Message Of #NoDifference</a></h1>
                            <p>Across the entire big, wide world, there are billions of faces in millions of places! Can you imagine how perfect and gorgeous this diverse world would be if everyone and everything was treated equally. No jealousy, no biases, no bad vibes! Simply put –  #NoDifference! It’s this wonderful message that BigRock has woven into a…</p>
                        </Col>
                        <Col xs={3} md={3}>
                            <Image src="assets/image2.png" style={styles} rounded responsive/>
                            <h1 style={headerStyle}><a href="#">The Latest Video Campaign By BigRock Is Winning Hearts With Its Lyrical Message Of #NoDifference</a></h1>
                            <p>Across the entire big, wide world, there are billions of faces in millions of places! Can you imagine how perfect and gorgeous this diverse world would be if everyone and everything was treated equally. No jealousy, no biases, no bad vibes! Simply put –  #NoDifference! It’s this wonderful message that BigRock has woven into a…</p>
                        </Col>
                        <Col xs={3} md={3}>
                            <Image src="assets/mmt-new-ss.png" style={styles} rounded responsive/>
                            <h1 style={headerStyle}><a href="#">The Latest Video Campaign By BigRock Is Winning Hearts With Its Lyrical Message Of #NoDifference</a></h1>
                            <p>Across the entire big, wide world, there are billions of faces in millions of places! Can you imagine how perfect and gorgeous this diverse world would be if everyone and everything was treated equally. No jealousy, no biases, no bad vibes! Simply put –  #NoDifference! It’s this wonderful message that BigRock has woven into a…</p>
                        </Col>
                        <Col xs={3} md={3}>
                            <Image src="assets/narcos-netflix-hed-2017.jpg" style={styles} rounded responsive/>
                            <h1 style={headerStyle}><a href="#">The Latest Video Campaign By BigRock Is Winning Hearts With Its Lyrical Message Of #NoDifference</a></h1>
                            <p>Across the entire big, wide world, there are billions of faces in millions of places! Can you imagine how perfect and gorgeous this diverse world would be if everyone and everything was treated equally. No jealousy, no biases, no bad vibes! Simply put –  #NoDifference! It’s this wonderful message that BigRock has woven into a…</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

//console.log("In main component");
//ReactDOM.render(<App/>, document.getElementById('app'));

