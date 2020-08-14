import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faHome, faCompass, faHeart, faPaperPlane } from "@fortawesome/free-solid-svg-icons";



const Nav = styled.div`
    display:flex;
    position:fixed;
    justify-content:space-between;
    align-items:center;
    width:100%;
    z-index:2;
    top:0;
    padding:10px;
    height:5em;
    border-bottom:solid 1px var(--color-secundary);
    color:var(--color-primary);
    background-color:#fff
`
const Logo = styled.img`
    height:2.6em;
`
const Lista = styled.ul`
    display:flex;
    align-items:center;
    li{
        list-style: none;
        font-size:24px;
        margin-right: 20px;
        color:var(--color-secundary);

        :first-child{
            color:var(--color-primary);
        }
    }
    img{
        width:2.8em;
        border-radius:50px;
    }
`


class Header extends React.Component {

    render() {
        return (
            <Nav>
                <Logo src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-7.png"/>    
                <Lista>
                    <li><a href="#" /><FontAwesomeIcon icon={faHome} /> </li>
                    <li><a href="#" /><FontAwesomeIcon icon={faPaperPlane} /> </li>
                    <li><a href="#" /><FontAwesomeIcon icon={faCompass} /> </li>
                    <li><a href="#" /><FontAwesomeIcon icon={faHeart} /> </li>
                    <img src="https://static1.purebreak.com.br/articles/8/87/80/8/@/331576-dollify-e-mais-um-aplicativo-que-te-tran-950x0-1.jpeg"/>
                </Lista>
            </Nav>
        )
    }
}

export default Header