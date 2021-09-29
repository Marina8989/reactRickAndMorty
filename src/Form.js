import React from 'react';
import styled from 'styled-components'

const StyledInput = styled.input`
    border: 1px solid yellow;
`

class Form extends React.Component{
    state={
        inputValue:''
    }
    handleChange = (e) => {
       this.setState({inputValue: e.target.value});
    }
    handleSubmit = (e) => {
      e.preventDefault();
      this.setState({inputValue: ''});
      this.props.handleSubmit(this.state.inputValue)
      console.log(this.state.inputValue);
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <StyledInput value={this.state.inputValue} onChange={this.handleChange}/>
            </form>
        )
    }
}

export default Form;