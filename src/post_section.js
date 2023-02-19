import styled from "styled-components"
import logo from "./sans.png"

const _post_thumbnail = styled.img``
const _post_title = styled.p
`
    font-weight: 250;
    color: #61DBFB;
`
const _post_date = styled.p
`
    font-style: italic;
    font-weight: 200;
    color: #000000;
`
const _post_tag = styled.p
`
    font-style: italic;
    font-weight: bolder;
    color: #999999;
`

function _post_normal_frame(props)
{
    return (
        <_post_normal_frame_style>
            <_post_thumbnail src={logo}></_post_thumbnail>
            <_post_normal_frame_text_style>
                <_post_title>{props.content}</_post_title>
                <_post_date>01-02-2001</_post_date>
                <_post_tag>#sans</_post_tag>
            </_post_normal_frame_text_style>
        </_post_normal_frame_style>
    )
}

function _post_normal()
{
    let ret=[]
    for(let i=0; i<10; i++)
    {
        ret.push(
                <_post_normal_frame content={i}></_post_normal_frame>
        );
    }
    return (
        <_post_normal_style>
            {ret}
        </_post_normal_style>
    );
}

const _post_normal_frame_text_style = styled.div
`
    padding: 0 0 0 0.5em;
    ${_post_title}
    {
        margin: 0;
        font-size: 1.8em;
    }

    ${_post_tag}
    {
        margin: 0;
    }
`

const _post_normal_frame_style = styled.div
`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    height: 400px;
    flex-basis: 300px;
    flex-shrink: 0;
    width: 30%;
    border-bottom: solid #61DBFB 0.15em;
    padding: 0.5em 1em;
    margin: 3em 1.5em;
    ${_post_thumbnail}
    {
        width: 100%;
    }
`

const _post_normal_style = styled.div
`
    display: flex;
    flex-wrap: wrap;
    margin: 1em 1em;
`

function _post_fixed_frame(props)
{
    return (
        <_post_fixed_frame_style>
            <_post_thumbnail src={logo}></_post_thumbnail>
            <_post_fixed_frame_text_style>
                <_post_title>{props.content}</_post_title>
                <_post_date>01-01-2001</_post_date>
                <_post_tag>#wa</_post_tag>
            </_post_fixed_frame_text_style>
        </_post_fixed_frame_style>
    )
}

const _post_fixed_frame_text_style = styled.div
`
    box-sizing: border-box;
    padding: 1em 0;
    ${_post_title}
    {
        font-size: 3em;
        margin: 0;
    }
    
    ${_post_date}
    {
        font-size: 1em;
    }
`

const _post_fixed_frame_style = styled.div
`
    display: flex;
    border: outset #61DBFB;
    margin: 1em 1em;
    height: 200px;
    flex-basis: 550px;
    flex-shrink: 0;
    justify-content: flex-start;

    ${_post_thumbnail}
    {
        margin: 0.5em 1.5em 0.5em 0.5em;
        max-width: 100%;
    }
`

const _post_fixed_style = styled.div
`
    box-sizing: border-box;
    display: flex;
    flex-basis: auto;
    flex-grow: 1;
    width: 100%;
    height: 50%;
    flex-wrap: wrap;
    justify-content: center;
`

function _post_fixed()
{
    return (
        <_post_fixed_style>
            <_post_fixed_frame content="S"></_post_fixed_frame>
            <_post_fixed_frame content="A"></_post_fixed_frame>
            <_post_fixed_frame content="N"></_post_fixed_frame>
            <_post_fixed_frame content="S"></_post_fixed_frame>
        </_post_fixed_style>
    )
}

const _post_hbar = styled.hr
`
    width: 100%;
    height: 0.15em;
    border: none;
    justify-content: center;
    background-color: #61DBFB;
`

const _post_style = styled.section
`
    margin: 0 0 0 20vw;
    padding: 2% 5%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    width: 80vw;
    height: 100%;
    justify-content: flex-end;
    flex-wrap: wrap;
`

function _post()
{
    return (
        <_post_style>
            <_post_fixed></_post_fixed>
            <_post_hbar></_post_hbar>
            <_post_normal></_post_normal>
        </_post_style>
    )
}

export default _post;