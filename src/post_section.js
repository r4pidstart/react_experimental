import styled from "styled-components"
import logo from "./logo.svg"

const _post_title = styled.p``
const _post_date = styled.p``
const _post_thumbnail = styled.img``
const _post_tag = styled.p``

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

const _post_normal_style = styled.div
`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    justify-content: center;

    ${_post_thumbnail}
    {
        height: 80%;
    }
`

const _post_normal_frame_style = styled.div
`
    box-sizing: border-box;
    width: 30%;
    margin: 1%;
    border: 0.3rem solid #32a1ce;
    color: #110000;
`

const _post_normal_frame_text_style = styled.div
`
    box-sizing: border-box;
    padding: 1em 1em;
    line-height: 1.5em;

    ${_post_title}
    {
        font-size: 2em;
        color: #00AABB;
        margin: 0 0 15% 0;
    }
    ${_post_date}
    {
        margin: 0;
        color: #444444;
    }
    ${_post_tag}
    {
        margin: 0;
        color: #656565;
    }
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

const _post_fixed_style = styled.div
`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-evenly;

    ${_post_thumbnail}
    {
        height: 100%;
    }
`

const _post_fixed_frame_style = styled.div
`
    width: 45%;
    box-sizing: border-box;
    margin: 0.5%;
    height: 160px;
    border: 0.3rem solid #32a1ce;
    color: #110000;
`

const _post_fixed_frame_text_style = styled.div
`
    float: right;
    box-sizing: border-box;
    padding: 1em 0px;
    width: 50%;
    height: 100%;
    line-height: 1.5em;

    ${_post_title}
    {
        font-size: 2em;
        color: #00AABB;
        margin: 0 0 15% 0;
    }
    ${_post_date}
    {
        margin: 0;
        color: #444444;
    }
    ${_post_tag}
    {
        margin: 0;
        color: #656565;
    }
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

const _post_hbar = styled.hr
`
    height: 1px;
    width: 100%; // <-- ???
    color: #000000; // <-- ???
`

const _post_style = styled.section
`
    display: flex;
    box-sizing: border-box;
    padding: 3% 4%;
    margin: 0 2vw;
    width: 75vw;
    height: 100vh;
    float: right;
    // background-color: #CCCCCC;
    flex-wrap: wrap;
`

export default _post;