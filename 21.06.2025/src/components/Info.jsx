import React from 'react';

export default class Info extends React.Component {
    
    render() {
        const { total, completed} = this.props
        return (
            <div>
             <h2>Всього завдань: {total}</h2>
             <h3>Виконано: {completed}</h3>   
            </div>
        );
    }
}