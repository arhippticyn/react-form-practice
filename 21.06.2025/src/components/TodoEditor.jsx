import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
          border: 2px solid black;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  padding: 10px;
  width:300px;
  height:100px;
        `

            const Btn = styled.button`
    background: green;
    color:#fff;
    width:300px;
    height: 70px;
    `

class TodoEditor extends React.Component {
    state={
        textValue: '',
    }
    
    handleChange = (e) => {
        this.setState({ textValue: e.target.value})
    }

    
    handleSubmit = (e) => {
      e.preventDefault()
      if (this.state.textValue === '') return

       this.props.onSubmit(this.state.textValue)
       this.setState({textValue: ''})
    }
    
    render() {
        
        return (
        <Form action="" onSubmit={this.handleSubmit}>
            <label htmlFor="task">Created Task:</label>
            <input type="text" name='task' onChange={this.handleChange}  value={this.state.textValue}/>
            <Btn type="submit">Create</Btn>
        </Form>
        );
    }
}

export default TodoEditor