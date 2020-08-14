import React from 'react'
import styled from 'styled-components'
import { faEllipsisH, faHeart, faComment, faBookmark, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



const Wrapper = styled.div`
    width:100%;
    margin-bottom:50px;

`
const Header = styled.div`   
    margin:10px 0px 10px 0px;
    padding:0px 10px 0px 10px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100%;
    div{
        display:flex;
        align-items:center;
    }
`
const Nome = styled.span`
    margin:0px 10px 0px 0px;
    font-weight:600;
    letter-spacing:1px;
`
const Link = styled.a`
    color:#222;
    font-size:22px;
`
const Legend = styled.p`
    margin:0px 10px 0px 10px;
`
const Icons = styled.ul`
    display:flex;
    list-style:none;
    margin:5px;
    justify-content:flex-start;
    li{
        font-size:22px;
        color:var(--color-secundary);
        margin:5px;
        :last-child{
            display:flex;
            justify-content:flex-end;
            align-self:flex-end;
            flex:1
        }
    }


`
const Foto = styled.img`
    display:block;
    width:100%;
    border-top: solid 1px var(--color-secundary);
    border-bottom: solid 1px var(--color-secundary);
`




const Avatar = styled.img`
    width:2.7em;
    margin-right:10px;
    border-radius:50%;
    background-image: linear-gradient(45deg, rgba(240,148,51,1) 0%, rgba(226,71,62,1) 70%, rgba(204,35,102,1) 95%);
`

class Post extends React.Component {
    constructor(props){
        super(props)

        
    }
    render()       
    {
        const name = this.props.name;
        const imgn= this.props.imgn;
        const pic = this.props.pic;
        const comment = this.props.comment 
        return (
            <Wrapper>
                <Header>
                    <div>
                        <Avatar src={imgn} />
                        <Nome>{name}</Nome>
                    </div>
                    <div>
                        <Link href="#"><FontAwesomeIcon icon={faEllipsisH} /></Link>
                    </div>
                </Header>
                <Foto src={pic} />

                <div>
                    <div>
                        <Icons>
                            <li><FontAwesomeIcon icon={faHeart} /></li>
                            <li><FontAwesomeIcon icon={faComment} /></li>
                            <li><FontAwesomeIcon icon={faPaperPlane} /></li>
                            <li><FontAwesomeIcon icon={faBookmark} /></li>
                        </Icons>
                    </div>
                    <div>
                       
                        <Legend><Nome>{name}</Nome>{comment}</Legend>
                    </div>
                </div>
            </Wrapper>
        )
    }
}
export default Post