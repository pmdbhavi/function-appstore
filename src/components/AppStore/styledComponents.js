import styled from 'styled-components'

export const MainCon=styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    min-height: 100vh;
    background-image:linear-gradient( #fff1eb,#ace0f9);
`

export const Head=styled.h1`
    color:#1e293b;
    font-weight: bold;
    text-align:center;
`

export const SearchCon=styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border:1px solid #7b8794;
    border-radius: 10px;
    align-self: center;
    width:250px;
`

export const Input=styled.input`
    background-color: transparent;
    padding:10px;
    outline:none;
    border-width:0px;
`

export const SearchIcon=styled.img`
    height:20px;
`

export const TabsUlList=styled.ul`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const AppsUlList=styled.ul`
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;
`