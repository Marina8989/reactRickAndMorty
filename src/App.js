import React from 'react';
//import Form from './Form';
//import List from './List';
import './index.css';
import Morty from './Morty';
import axios from 'axios';
//import styled from 'styled-components';


const API_BASE = 'https://rickandmortyapi.com/api/character';

class App extends React.Component{
    state={
        cartoonData: null
    } 
    getInfo = async() => {
      try{
          const {data} = await axios(API_BASE);
          console.log(data)
          this.setState({cartoonData: data});
          console.log(this.state.list)
      }catch(err){
        console.log(err)
      }
    }
    componentDidMount() {
      this.getInfo(this.props.match.params.id);
    }
    componentDidUpdate(prevProps) {
      if(this.props.match.params.cityId !== prevProps.match.params.id) {
        this.getInfo(this.props.match.params.cityId);
      }
    }
    render(){
      console.log(this.state.cartoonData)
       return(
         <div>
           <Morty cartoonData={this.state.cartoonData}/>
         </div>
       )
    }
}

export default App