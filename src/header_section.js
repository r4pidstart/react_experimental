import styled from "styled-components";
import logo from "./logo.svg"

function _header_title()
{
    return (
        <>
            <p>샌즈<br/>팬클럽</p>
        </>
    );
}

const _header_title_style = styled.div
`
    font-size: 2vw;
    line-height: 150%;
    color: #FFFFFF;
`

const _header_hbar = styled.hr
`
    width: 100%;
`   

const _header_logo = styled.img
`
    width: 25%;
`

const _header_redirection_style = styled.div
`
    box-sizing: border_box;
    width: 100%;
    height: 6em;
`
    
const _header_style = styled.section
`
    box-sizing: border-box;
    display: flex;
    position: fixed;
    justify-content: flex-end;
    flex-direction: column;
    width: 20vw;
    height: 100vh;
    padding: 1% 2%;
    background-color: #333333;
    line-height: 150%;
`

function _header()
{
    return (
        <_header_style>
            <_header_title_style>
                <_header_title></_header_title>
            </_header_title_style>

            <_header_hbar></_header_hbar>
            
            <_header_redirection_style>
                <_header_logo src={logo}></_header_logo>
                <_header_logo src={logo}></_header_logo>
                <_header_logo src={logo}></_header_logo>
                <_header_logo src={logo}></_header_logo>
            </_header_redirection_style>
        </_header_style>
    );
}

export default _header;