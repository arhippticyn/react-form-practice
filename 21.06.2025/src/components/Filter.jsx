import React from 'react';
import styled from 'styled-components';

        const Filtered = styled.div`
        margin-top: 20px;
        `
        
export default class Filter extends React.Component {
    
    render() {
        const { onChange } = this.props


        return (
            <Filtered>
                <label htmlFor="seacrh">Фільтр по імені</label>
                <input onChange={onChange} type="text" name="search" id="" />
            </Filtered>
        );
    }
}