import React from 'react';
import Item from './Item';
import styled from 'styled-components';

const StyledUl = styled.ul`
     padding: .2rem;
     margin: .6rem;
     list-style: none;
`

const List = (props) => {
    return(
        <StyledUl>
          {props.list.map(item => <Item key={item.id} item={item} handleRemove={props.handleRemove} handleToggle={props.handleToggle}/>)}
        </StyledUl>
    )
}

export default List;