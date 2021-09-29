import React from 'react';
import Form from './Form';
import styled from 'styled-components';

const StyledBody = styled.div`
   text-align: center;
   margin: 0 auto;
`

class App extends React.Component{
    state={
        list: []
    }
    render(){
        console.log(this.state.list)
        return(
            <StyledBody>
              <h4>Rick and Morty</h4>
              <Form handleSubmit={this.handleSubmit}/>
                
            </StyledBody>
        )
    }
}

export default App