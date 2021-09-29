import React from 'react';
import Form from './Form';
import List from './List';
import './index.css';
import styled from 'styled-components';

const StyledBody = styled.div`
   text-align: center;
   margin: 0 auto;
`

class App extends React.Component{
    state={
        list: [],
        completed: false
    }
    handleSubmit = (value) => {
       const item = {
         id: `${Math.random() * 20}`,
         value,
         
       }
       const newList = [...this.state.list, item];
       this.setState({list: newList});
    }
    handleRemove = (item) => {
      const newList = this.state.list.filter(el => el.id !== item.id);
      this.setState({list: newList});
    }
    handleToggle = (item) => {
      const newList = this.state.list.map(el => {
        if(el.id === item.id){
           el.completed = !el.completed;
        }
        return el;
      })
      this.setState({list: newList});
    }
    render(){
        console.log(this.state.list)
        return(
            <StyledBody>
              <h4>Rick and Morty</h4>
              <Form handleSubmit={this.handleSubmit}/>
              <List list={this.state.list} handleRemove={this.handleRemove} handleToggle={this.handleToggle}/>  
            </StyledBody>
        )
    }
}

export default App