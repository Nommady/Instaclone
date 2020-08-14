import React from 'react'
import styled from 'styled-components'
import Storie from './Storie'

const Wrapper = styled.div`
    padding: 10px 0px 10px 10px;
    display: flex;
    overflow-x:scroll;
    border: solid 1px var(--color-secundary);
    margin: 5.16em 0.83em 0em 0em;
    height:8.6em;
    width:100%

`
class Stories extends React.Component{
    render(){
        return(
            <Wrapper>
                <Storie name="Zelda" imgn="https://avatarfiles.alphacoders.com/105/thumb-105223.jpg"/>
                <Storie name="Carlos" imgn="data:image/png;base64,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"/>
                <Storie name="Andressa" imgn="https://images7.memedroid.com/images/UPLOADED641/5acc3d6227b33.jpeg"/>
                <Storie name="Marcos" imgn="https://pm1.narvii.com/6860/1f7899d335dc626d7a4cf4ea9ed07697892204d3r1-720-720v2_hq.jpg"/>
                <Storie name="Rei_Delas" imgn="https://i.pinimg.com/originals/6e/2b/c3/6e2bc36af8e94c52db505f64b3d5c44f.jpg"/>
                <Storie name="Atahhullda_Dyana" imgn="https://pm1.narvii.com/6554/8efdced5dca5f67c93c794fe9f8d880bdd13239d_00.jpg"/>
                <Storie name="Alex" imgn="https://i.pinimg.com/736x/80/c7/9e/80c79eccd193b29d285f5d874ab37b0a.jpg"/>
                <Storie name="TodoDiaBriga" imgn="https://i.pinimg.com/originals/49/af/81/49af819428b7ba4c443e68ec11f56b7f.jpg"/>
                <Storie name="Eneias" imgn="https://pbs.twimg.com/profile_images/1062424423960068096/3vrStO8C_400x400.jpg"/>
                <Storie name="José" imgn="https://i.pinimg.com/736x/18/e3/82/18e382668b4f22014935ad9dfbd07436.jpg"/>
            </Wrapper>
        )
    }
}
export default Stories