import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { __getinstas,__deleteinsta } from"../redux/modules/AddPageSlice"


import Header from "../components/Header"
  
  const MainPage = () => {
  const navigator = useNavigate();
  const  contents  = useSelector((state) => state.mainlist.instas)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(
      __getinstas()
    );
  }, [dispatch]);


  const [likeImage, setLikeImage] = useState({
    id:0,
    isLike:false,
  });

  const imgToggleHandler = (postId) => {
    const newLike = {
      id:postId,
      isLike:!likeImage.isLike,
    }
    setLikeImage(newLike)
  }


  const [editTg, setEidtTg] = useState({
    id:0,
    isEdit:false,
  });
  
  const editToggleHandler = (postId) => {
    const newEdit = {
      id:postId,
      isEdit:!editTg.isEdit,
    }
    setEidtTg(newEdit)
  }
  


  return (
    <>
    <Header/>
    <Bg>
      <>
      {(
        <>
          { 
          contents.map((item)=>{
            return (
            <Container key={item.id}>
              <Iheader>
                <Info>
                <Imgps src="./images/tobin.png"/>
                <Fontnickname>{item.author}</Fontnickname>
                </Info>
                <Tgbutton onClick={()=>{editToggleHandler(item.id)}}>···</Tgbutton>
                {editTg.isEdit === true && editTg.id === item.id  ? (
                <ToggleNav>
                  <div><Button onClick={() => {dispatch(__deleteinsta(item))}}>삭제</Button></div>
                  <div><Button onClick={() => {navigator(`/EditPage/${item.id}`)}}>수정</Button></div>
                </ToggleNav>
                ):null 
                }  
              </Iheader>
                <div><Image src={item.image}/></div>
                <TextBox>
                  {likeImage.isLike === true && likeImage.id === item.id ?
                  <Himg  onClick={()=>{imgToggleHandler(item.id)}}src="./images/free-icon-heart-1077035.png" />
                  :
                  <Himg  onClick={()=>{imgToggleHandler(item.id)}}src="./images/free-icon-hearts-138533.png" />
                  }
                   <Himg2  src="./images/chat.png" />
                   <Himg3  src="./images/send.png" />
                   <Himg4  src="./images/ribbon.png" />
                  <p>hanghae99 님 여러명이 좋아합니다. </p>
                  <p>{item.author}&nbsp;{item.content}</p>
                </TextBox>
            </Container>
            )
            })
          }
        </>
      )}
      </>
   </Bg>
   </>
  )
}
export default MainPage;

const Fontnickname = styled.p`
font-weight:600;
color:#333;
font-size:12px;
line-height:30px;
margin-left:10px;
`
const Himg = styled.img`
  width:22px;
  height:22px;
`
const Himg2 = styled.img`
  margin-left:10px;  
  width:26px;
  height:26px;
`
const Himg3 = styled.img`
  margin-left:10px;  
  width:23px;
  height:23px;
`
const Himg4 = styled.img`
  margin-left:300px;  
  width:23px;
  height:23px;
`

const Image = styled.img`
  width:440px;
  height:400px;
`

const Imgps = styled.img`
  display:block;
  line-height:30px;
  width:33px;
  height:33px;
  margin-top:9px;
`
const Bg =styled.div`
  width: 440px;
  margin:0 auto;
  margin-top:80px;
`
const Container =styled.div`
  position:relative;
  width:440px;
  height:620px;
  border:1px solid #ddd;
  border-radius: 5px;
  margin-bottom:30px;
`
const Info = styled.div`
  display:flex;
  margin-left:10px;
`
const Iheader = styled.div`
  display:flex;
  justify-content:space-between;
  width:440px;
  height:50px;
`
const Tgbutton = styled.button`
  border:none;
  font-weight:600;
  width:50px;
  background-color:#fff;
`
const ToggleNav = styled.div`
  position:absolute;
  right:-80px;
`
const Button = styled.button`
  width:80px;
  height:40px;
  margin-bottom:3px;
  border:1px solid #ddd;
  border-radius:5px;
  background-color:#fff;
  &:hover {
    background-color:#red;
  }
`
const TextBox= styled.div`
  padding:8px 13px;
`
const Span = styled.span`
  font-size:12px;
  color:#696969;
`