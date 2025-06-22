import React from 'react';
import styled from 'styled-components';

class Todolist extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        const { todos, deleteBtn, checked } = this.props
        const Ul = styled.ul`
          display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-left: 0;
        `
            const Li = styled.li`
              border: 2px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 550px;
    `

    const Btn = styled.button`
    background: green;
    color:#fff;
    width:150px;
    height: 40px;
    `

    const Text = styled.h3`
    text-decoration:${({ completed }) => (completed ? 'line-through' : 'none')}
    `


        return (
            <Ul>
                {todos.map((todo) => (
                <Li key={todo.id}>
                    <input type="checkbox" onChange={() => checked(todo.id)} checked={todo.completed} name="" id="" />
                    <Text completed={todo.completed}>{todo.text}</Text>
                    <Btn onClick={() => deleteBtn(todo.id)}>Delete</Btn>
                </Li>
                ))}
            </Ul>
        );
    }
}

export default Todolist