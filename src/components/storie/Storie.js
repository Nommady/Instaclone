import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin-right:0.83em;
    width:85px;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:5px;

`
const Avatar = styled.img`
    width:4.7em;
    border-radius:50%;
    background-image: linear-gradient(45deg, rgba(240,148,51,1) 0%, rgba(226,71,62,1) 70%, rgba(204,35,102,1) 95%);
`
const Nome = styled.span`
    margin-top:0.5em
`


class Storie extends React.Component {
    constructor(props){
        super(props)
            
    }

    render(){
        return(
            <Wrapper>
                <Avatar src={this.props.imgn}/>
                <Nome>{this.props.name}</Nome>
            </Wrapper>
        )
    }
}
export default Storie