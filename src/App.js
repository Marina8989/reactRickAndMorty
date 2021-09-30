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
        completed: false,
        sorted: false,
        updatedValue: ''
    }
    handleSubmit = (value) => {
       try{
        const item = {
         id: `${Math.random() * 20}`,
         value,
        }
        const newList = [...this.state.list, item];
        if(this.state.list.find(el => el.value.includes(value))) {
           return;
        }
        this.setState({list: newList});
       }catch(err){
         console.log('Please try again... something went wrong')
       }
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
    handleEdit = (item, value) => {
        console.log('item', item);
        console.log('value', value)
    }
    
    render(){
        return(
            <StyledBody>
              <h4>Rick and Morty</h4>
              <Form handleSubmit={this.handleSubmit}/>
              <List 
                list={this.state.list} 
                handleRemove={this.handleRemove} 
                handleToggle={this.handleToggle}
                handleEdit={this.handleEdit}
              />  
              
            </StyledBody>
        )
    }
}

export default App