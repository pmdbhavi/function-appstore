import styled from 'styled-components'

export const TabList=styled.li`
    list-style-type: none;
`

export const Button=styled.button`
    border-width:0px;
    border-bottom-width:3px;
    background-color:transparent;
    border-color:${props=>props.active?"#dfe2e5":"#2563eb"};
    color:${props=>props.active?"#dfe2e5":"#2563eb"};
    cursor: pointer;
`

export const Para=styled.p`
    font-weight: bold;
    font-size:20px;
`