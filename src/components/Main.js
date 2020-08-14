import React from 'react'
import styled from 'styled-components'
import Post from './post/Post'

const Wrapper = styled.div`
    background-color:var(--color-terciary);
    padding-top:20px;
    height:100vh;
`

class Main extends React.Component{
    render(){
        return(
            <Wrapper>
                <Post name="José" imgn="https://i.pinimg.com/236x/c6/c5/fa/c6c5fac02f7ecf73ef3b445bbe6b45bc.jpg" pic="https://images.unsplash.com/photo-1502224562085-639556652f33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></Post>
                <Post name="André" imgn="https://i.pinimg.com/236x/81/8b/e9/818be9061d793a17c7bb492e3f0d37db.jpg" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPXABkNYJYP0ScNVBp2uvMwnzjT0x7L8SBcQ&usqp=CAU" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></Post>
                <Post name="Paulo" imgn="https://i.pinimg.com/236x/b5/d4/67/b5d467136723511dd97dc1636705d5a6.jpg" pic="https://olharconceito.com.br/imgsite/noticias/selfie1.png" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></Post>
                <Post name="Juliana" imgn="https://i.pinimg.com/236x/0e/cf/28/0ecf2898e65b279850d2ce1813f1d134.jpg" pic="https://pbs.twimg.com/profile_images/1113007214460010496/XhZMowZF_400x400.jpg" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></Post>
                <Post name="Andressa" imgn="https://pbs.twimg.com/media/D-U6IAnWwAA9S9y.jpg" pic="https://img.ibxk.com.br/ns/rexposta/2018/07/18/18213640667159.jpg?watermark=neaki&w=600" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></Post>
                <Post name="Paola" imgn="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0ilzZdTHnEUfUnBdOy2rAA0rcR5uqG4xmHg&usqp=CAU" pic="https://pbs.twimg.com/profile_images/1191420541309243400/7rYDRTCg_400x400.jpg" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></Post>
                <Post name="Carlos" imgn="https://i.pinimg.com/236x/09/0a/45/090a454dd85d9af42c01ed70ac046159.jpg" pic="https://aglomeradodigital.com.br/wp-content/uploads/2015/09/30-fotos-aleatorias-24.jpg" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></Post>
             
            </Wrapper>
        )
    }
}
export default Main