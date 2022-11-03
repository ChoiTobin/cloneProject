import React, { useState } from "react";
import "./Modal.css";
import styled from "styled-components";
import { IoMdHome, IoLogoGithub } from "react-icons/io";
import AddPage from "../pages/AddPage";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      {/* <Button onClick={toggleModal} className="btn-modal">
      </Button> */}
      <Himg onClick={toggleModal}  src="./images/more.png"/>

      

      {modal && ( 
        <div className="modal">
          <div onClick={toggleModal} className="overlay">

          </div>
          <div className="modal-content">
            
            <AddPage/>

            {/* <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button> */}
            
          </div>
        </div>
      )}
      
    </>
  );
}

const Himg = styled.img`  
  width:26px;
  height:26px;
  margin:0;
  padding:0;
  margin-left:20px;
`
const Button = styled. button`
  width:0px;
  border:none;
  background:transparent;
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