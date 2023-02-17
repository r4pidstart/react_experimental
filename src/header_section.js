import styled from "styled-components";
import logo from "./logo.svg"

function _header_title()
{
    return (
        <>
            <p>샌즈</p>
            <p>팬클럽</p>
        </>
    );
}

const _header_style = styled.header
`
    position: fixed;
    display: flex;
    flex-direction: column-reverse;
    box-sizing: border-box;
    width: 20vw;
    height: 100vh;
    padding: 30px;
    margin: 0;
    float: left;
    background-color: #222222
`

const _header_title_style = styled.div
`
    font-size: 2.5em;
    line-height: 0.3em;
    color: #CCCCCC;
`

const _header_hbar = styled.hr
`
    width: 100%;
    color: #CCCCCC;
`

const _header_redirection_style = styled.div
`
    display: flex;
    box-sizing: border-box;
    flex-flow: row wrap;
    width: 100%;
`

const _header_logo = styled.img
`
    max-width: 25%;
    height: auto;
`

function _header()
{
    return (
        <_header_style>
            <_header_redirection_style>
                <_header_logo src={logo}></_header_logo>
                <_header_logo src={logo}></_header_logo>
                <_header_logo src={logo}></_header_logo>
                <_header_logo src={logo}></_header_logo>
            </_header_redirection_style>

            <_header_hbar></_header_hbar>
            
            <_header_title_style>
                <_header_title></_header_title>
            </_header_title_style>
        </_header_style>
    );
}

export default _header;