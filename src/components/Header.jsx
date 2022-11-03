import React from 'react'
import { useNavigate } from "react-router-dom";
import { IoMdHome, IoLogoGithub } from "react-icons/io";
import styled from "styled-components";
import Modal from "../modal/Modal";
import { useDispatch, useSelector } from 'react-redux'
import { __userLogout } from '../redux/modules/LoginSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  // 로그아웃
  const onLogoutHandler = () => {
    dispatch(__userLogout())
    alert("이용하시려면 다시 로그인 해주세요")
    window.location.replace("/")
  }

  return (
    <>
    
    <HeadContainer>
    <HeadLeft>
    <Logo  src="./images/instagram.png" />
    </HeadLeft>
      <HeadRight1>
        <Himg  src="./images/free-icon-home-button-60817 (1).png" />
        <Himg  src="./images/send.png" />
        {/* <Himg  src="./images/more.png"/> */}
        {/* <Himg  src="./images/free-icon-explore-8345540.png" /> */}
        <Modal />
        <Himg  onClick={onLogoutHandler} src="./images/logout (1).png" />
        <Himg  src="./images/tobin.png" />
      </HeadRight1>
      
      
      
 {/* <button >Logout</button>
            
         */}
        



    </HeadContainer>
    </>
  )
}

export default Header;
const Logo = styled.img`
  margin-left:10px;  
  width:86px;
  height:30px;
`
const Himg = styled.img`
  margin-left:20px;  
  width:26px;
  height:26px;
`

const HeadContainer = styled.section`
  z-index:1;
  grid-column: 1 / 4;
  grid-row: 1 / 2;
  width: 100%;
  height: 50px;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top:0;
  left: 0;
  border-bottom:1px solid #ddd;
  // box-shadow: 0px 2px 10px #9dabca;
  background-color:#fff;
`
const HeadLeft = styled.a`
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  background-color: transparent;
  display: flex;
  align-items: center;
  .head-ico {
  font-size: 1.6rem;
  margin: 5px;
  color: white;
  background-color: transparent;
  height: 40px;
}
`

const Div = styled.div`
  background-color: transparent;
  font-weight: 400;
  line-height: 4;
`


const HeadRight1 = styled.a`
  font-size: 0.8rem;
  font-weight: 600;
  align-content: center;
  background-color: transparent;
  line-height: 0.2;
  display: flex;
  align-items: center;
  `

const HeadRight2 = styled.button`
font-size: 0.9rem;
width: 30px;
height: 40px;
color: #00251a;
border: 0;
cursor: pointer;
font-weight: 600;
background-color: transparent;
justify-content: center;
.head-ico {
  font-size: 1.6rem;
  margin: 5px;
  color: white;
  background-color: transparent;
}
`