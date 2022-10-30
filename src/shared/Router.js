import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import AddPage from "../pages/AddPage";
import MainPage from "../pages/MainPage";
import EditPage from "../pages/EditPage";




const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인 페이지 이동하기 */}
        <Route path='/' element={<SignIn />} />

        {/* 회원가입 페이지 이동하기 */}
        <Route path='/signup' element={<SignUp />} />

        {/* 인스타 리스트 생성 페이지로 이동하기 */}
        <Route path='/addpage' element={<AddPage />} />
        
        {/* 인스타 메인 리스트 이동하기 */}
        <Route path='/mainpage' element={<MainPage />} />

        {/* 수정페이지 이동하기 */}
        <Route path='/editpage' element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
