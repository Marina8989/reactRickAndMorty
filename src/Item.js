import React from 'react';
import styled from 'styled-components';

const RemoveButton = styled.button`
  color: red;
  margin: .5rem;
`
const ToggleButton = styled.button`
    color: green;
`

const Item = (props) => {
    console.log(props)
    return(
        <li className={props.item.completed ? 'toggle' : ''}>
          {props.item.value}
          <RemoveButton onClick={() => props.handleRemove(props.item)}>x</RemoveButton>
          <ToggleButton onClick={() => props.handleToggle(props.item)}>toggle</ToggleButton>
        </li>
    )
}

export default Item