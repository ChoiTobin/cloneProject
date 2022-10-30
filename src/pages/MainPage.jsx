import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { __userLogout } from '../redux/modules/LoginSlice';


const MainPage = () => {
  const dispatch = useDispatch()
  const onLogoutHandler = () => {
    dispatch(__userLogout())
    alert("이용하시려면 다시 로그인 해주세요")
    window.location.replace("/")
  }
  
  return (
    <>
      인스타 메인 리스트가 뿌려짐
      <button onClick={onLogoutHandler}>Logout</button>
      
    
    </>
  )
}

export default MainPage ;

