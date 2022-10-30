import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {__userLogin} from "../redux/modules/LoginSlice"

const SignIn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const initialState = {
    username: "",
    password: "",
  }
  
  const [login, setLogin] = useState(initialState);
  const onChangeHandler = (event) => {
    const {name, value} = event.target
    setLogin({...login, [name] : value})
  }
  
  const onSubmitHandler = (event) => {
    event.preventDefault()
    const obj = {
      id : 1,
      username: login.username,
      password: login.password,
    }
    dispatch(__userLogin(obj))
    
  }
  
  return (
    <Stbg>
      <Container>
        <InputContainer>
        <Logo><img src="./images/instagram.png" alt="" /></Logo>
          <div>
            <div><Input type="text" name="username" value={login.username} placeholder='아이디' onChange={onChangeHandler} /></div>
            <div><Input type="password" name="password" value={login.password} placeholder='비밀번호' onChange={onChangeHandler} /></div>
          </div>
        <Button1 onClick={onSubmitHandler}>로그인</Button1>
        <P>또는</P>
        <H3>Facebook으로 로그인</H3>
        <H4>비밀번호를 잊으셨나요?</H4>
        </InputContainer>
        <Button2 onClick={() => {navigate("/signup");}}>계정이 없으신가요? &nbsp;<Span>가입하기</Span></Button2>
      </Container>
    </Stbg>
  )
}

export default SignIn

const Stbg = styled.div`
  position:relative;
  min-width: 100vh;
  min-height: 100vh;
`
const Container =styled.div`
  text-align:center;
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  padding-left:50px;
  padding-top:20px;
`
const StfrontImg =styled.div`

`
const Logo = styled.div`
  margin:40px; 0;
`
const InputContainer = styled.div`
  width:350px;
  height:380px;
  border: 1px solid #ddd;
`
const Input =styled.input`
  width:267px;
  border:none;
  font-size:10px;
  border: 1px solid #ddd;
  height:20px;
  padding: 9px 0 7px 8px;
  background-color:#fafafa;
  margin:3px 0;
`
const Button1 = styled.button`
  width:277px;
  border: none;
  background-color:#b9ddf5;
  border-radius:3px;
  margin-top:10px;
  padding:5px 0;
  color:#fff;
  font-weight:600;
  cursor:pointer;
`
const Button2 =styled.button`
  margin-top:10px;
  display:block;
  border:none;
  width:350px;
  height:50px;
  background-color:#fff;
  border: 1px solid #ddd;
  cursor:pointer;
`
const Span = styled.span`
  font-weight:600;
  color:#458cb8;
`
const P = styled.p`
  font-size:12px;
  font-weight:600;
  color:#666;
`
const H3 = styled.h3`
  color: #385185;
  font-size:14px;
  font-weight:600;
  line-height:18px;
`
const H4 = styled.h4`
  color: #00376b;
  font-size:12px;
`