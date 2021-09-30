import React from 'react';
import styled from 'styled-components';

const RemoveButton = styled.button`
  color: red;
  margin: .5rem;
`
const ToggleButton = styled.button`
    color: green;
    margin: .5rem;
`
const EditButton = styled.button`
    color: blue;
    margin: .5rem;
`

class Item extends React.Component{
    state={
        updatedValue: this.props.item.value
    }
    render(){
        console.log(this.state.inputValue)
       return(
         <li className={this.props.item.completed ? 'toggle' : ''}>
           {this.props.item.value}
           <RemoveButton onClick={() => this.handleRemove(this.props.item)}>x</RemoveButton>
           <ToggleButton onClick={() => this.handleToggle(this.props.item)}>toggle</ToggleButton>
           <EditButton onClick={() => this.handleEdit(this.props.item, this.props.item.value)}>edit</EditButton>
         </li>
    )
    }
}

export default Item