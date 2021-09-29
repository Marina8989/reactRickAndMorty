import React from 'react';
import styled from 'styled-components'

const StyledInput = styled.input`
    border: 1px solid yellow;
`

class Form extends React.Component{
    state={
        inputValue:''
    }
    render() {
        return(
            <form onSubmit={this.shandleSubmit}>
                <StyledInput value={this.state.inputValue} onChange={this.handleChange}/>
            </form>
        )
    }
}

export default Form;