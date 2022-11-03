import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { __userSignUp, __checkId, __checkName,__idCheck } from '../redux/modules/LoginSlice'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {account, idCheck, nameCheck} = useSelector((state) => state.account)
  const initialState = {
    username: "",
    nickname: "",
    password: "",
    passwordCheck: "",
  };
  const [join, setJoin] = useState(initialState);
  const onChangeHandler = (event) => {
    const {name, value} = event.target
    setJoin({...join, [name] : value})
  }
  const obj = {
    username: join.username,
    nickname: join.nickname,
    password: join.password,
    passwordCheck:join.passwordCheck,
  }

const onCheckId = () => {
  console.log("오브젝트",obj)
  dispatch(__idCheck(obj.username))
}


  const onSubmitHandler = (event) => {
   event.preventDefault()
 
    if(obj.username === "" || obj.username === undefined) {
      return alert("아이디를 입력해주세요.")
    }
    if(obj.nickname === "" || obj.nickname === undefined) {
      return alert("닉네임을 입력해주세요.")
    }
    if(obj.password === "" || obj.password === undefined) {
      return alert("비밀번호를 입력해주세요.")
    }
    if(obj.passwordCheck === "" || obj.passwordCheck === undefined) {
      return alert("비밀번호를 한번더 입력해주세요")
    }



    dispatch(__userSignUp(obj))

  }
  useEffect(() => {

      setJoin({
        username: "",
        nickname: "",
        password: "",
        passwordCheck: "",
      })

      if(account.error !== undefined){
        alert(account.error)
  }
  }, [account])
  return (
    <Bg>
    <Stcontainer>
    <Box>{/* box */}
          <div>
          <Logo><img src="./images/instagram.png" alt="" /></Logo>
            <div><Button2>facebook으로 로그인</Button2></div>
            <P>또는</P>
              <Input2 type="text" name='username' onChange={onChangeHandler} placeholder="아이디를 입력해주세요" />
          </div>
          <div>
              <Input2 type="text" name='nickname' onChange={onChangeHandler} placeholder="닉네임을 입력해주세요" />

          </div>
          <div>
              <Input2 type="password" name='password' onChange={onChangeHandler} placeholder="비밀번호를 입력해주세요" />
          </div>
          <div>
              <Input2 type="password" name='passwordCheck' placeholder='비밀번호를 다시 입력 해주세요' onChange={onChangeHandler} />
          </div>
          <div>
            <Button1  onClick={onSubmitHandler} >가입</Button1>
              <Button4 onClick={() => {navigate("/");}}>뒤로가기</Button4>
          </div>

      </Box>{/* box */}
    </Stcontainer>
    </Bg>
  )
}
export default SignUp

const P = styled.p`
  font-size:12px;
  font-weight:600;
  color:#666;
`


const Input2 =styled.input`
  width:267px;
  border:none;
  font-size:10px;
  border: 1px solid #ddd;
  height:20px;
  padding: 9px 0 7px 8px;
  background-color:#fafafa;
  margin:5px 0;
`

const Logo = styled.div`
  margin:30px; 0;
`
const Bg =styled.div`
  position:relative;
  height: 100%;
  min-width: 100vh;
`
const Stcontainer=styled.div`
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, 50%);
  margin: 0 auto;
  height:380px;
`
const Box=styled.div`
  background-color:white;
  height:500px;
  width:350px;
  margin:0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border:1px solid #ddd;
`

const Button1 = styled.button`
margin-top:10px;
width:150px;
background-color:#b3dffa;
border:none;
border-radius:4px;
color:white;
font-weight:600;
padding:5px 0;
margin-bottom:60px;
`
const Button2 = styled.button`
margin-top:10px;
width:275px;
background-color:#0095f6;
border:none;
border-radius:4px;
color:white;
font-weight:600;
padding:5px 0;
`
const Button4 = styled.button`
margin-left:10px;
margin-top:10px;
width:110px;
background-color:#b3dffa;
border:none;
border-radius:4px;
color:white;
font-weight:600;
padding:5px 0;
`
const Span = styled.span`
font-weight:600;
color:#458cb8;
`
const Button3 = styled.button`
margin-top:0px;
width:275px;
background-color:#0095f6;
border:none;
border-radius:4px;
color:white;
font-weight:600;
padding:5px 0;
`
// const H2 = styled.h2`
//   color:#e50913;
// `
// const P = styled.h1`
//   color: #fff;
//   font-size:40px;
//   margin:20px 0;
// `
// const Button = styled.button`
//   margin-left:10px;
//   width:100px;
//   height:52px;
//   border:none;
//   background-color:#e50913;
//   color:#fff;
//   font-weight:600;
// `
// const Button2 = styled.button`
//   margin-top:20px;
//   width:270px;
//   height:52px;
//   border:none;
//   background-color:#e50913;
//   color:#fff;
//   font-weight:600;
// `
// const Button3 = styled.button`
//   margin-top:20px;
//   width:270px;
//   height:52px;
//   border:none;
//   background-color:#e50913;
//   color:#fff;
//   font-weight:600;
//   margin-left:20px;
// `
// import React from 'react'
// const SignUp = () => {
//   return (
//     <>회원가입</>
//   )
// }
// export default SignUp;