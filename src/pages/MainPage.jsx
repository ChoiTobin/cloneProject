import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import {__listAllget} from"../redux/modules/AddPageSlice"
//구조분해할당 =>
import { Params } from 'react-router-dom'



const MainPage = () => {

  const  contents  = useSelector((state) => state.mainlist.instaGet)
  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(
      __listAllget()
    );
}, [dispatch]);


const [toggle,setToggle] = useState(false)

const editToggleHandler = () => {
  toggle ? setToggle(false) : setToggle(true);
}

console.log("조던",contents)

  return (

    <Bg>
      <ListCenter> 
      {
      // 조건부 렌더링, length가 0 이상이여야만 렌더링(0개일땐 하지 마!)
      (
        <>
          { contents.map((item)=>{
              return (
                
            <Container  key={item.postingId}>                
                    <Header>
                        <span><Imgps src="https://www.kacinc.co.kr/common/img/default_profile.png" />닉네임</span>
                        <Button1 type='summit' onClick={editToggleHandler}>모달</Button1>
                        <Togle>
                          {toggle ? ( 
                             <TogleGroup>
                                <Button3>수정하기</Button3>
                                <Button3>삭제하기</Button3>
                              </TogleGroup>
                          ):null }  
                        </Togle>
                    </Header>
                    <Imagebox>
                      <Image src='data:image/jpeg;base64,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'/> 
                    </Imagebox>
                    <Content1>
                      <p>❤</p>
                      <p>ickname</p>
                      <p>멘트가들어옴</p>
                    </Content1>
            </Container>         
              )
            })
          }
        </>
      )
      }
      </ ListCenter>   
   </Bg>
  )
}

export default MainPage;


const Togle =styled.div`
  position:absolute;
  right:650px;
  top:15px;
  z-index:999;
  margin:0;
  padding:0;

`
const Bg = styled.div`

`
const ListCenter = styled.div`
  
`
const TogleGroup = styled.div`
  display:flex;
  flex-direction:column;
`
const Button3 = styled.button`
  border:none;
  width:80px;
  height:40px;
  padding:10px10px;
  background-color:#fff;
  border: 1px solid #ddd;
`
const Container =  styled.div`
  width:440px;
  height:600px;
  border: 1px solid #ddd;
  border-radius:10px;
  margin:0 auto;
  margin-bottom:20px;
`
const Header = styled.div`
  postion:relative;
  display: flex;
  justify-content: space-between;
  padding:5px 20px;
  width: 400px;
  height:50px;
  line-height:50px;
`
const Button1 =styled.button`
  display:block;
  postion:absolute;
  right:0;
  top:0;
`
const Image = styled.img`
  width:440px;
  height:400px;
`
const Imagebox = styled.div`
  width:440px;
  img {
  height:400px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
`
const Content1 =styled.div`
  width:440px;
  height:100px;
  line-height:10px;
  text-indent:15px;
`

const Imgps = styled.img`
  width:30px;
  height:30px;
`