import React from 'react';
import { useRouterHistory } from 'react-router'
import createHistory from "history/createBrowserHistory"

export default class Home extends React.Component{
   
    componentWillMount(){
        console.log("PROPS"+JSON.stringify(this.props.children))
      this.props.history.push('/Categories')
    }

    render(){
        return(
        <div>Home</div>
        );
    }
   

}