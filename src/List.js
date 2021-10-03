import React from 'react';
import Item from './Item';
import styled from 'styled-components';


const List = (props) => {
    return(
        <ul>
          {props.list.map(item => (
            <Item key={item.id} item={item} />))}
        </ul>
    )
}

export default List;