import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import React, { useState , useEffect} from "react";
import {__getinstas,__deleteinsta ,__editinstas} from"../redux/modules/AddPageSlice"
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { IoMdRemoveCircle } from 'react-icons/io';
import Comments from '../components/Comments'

const EditPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id}  = useParams()
  const  contents  = useSelector((state) => state.mainlist.instas)

  useEffect(() => {
    dispatch(
      __getinstas()
    );
  }, [dispatch]);
  

  const [editContent, setEditContent] = useState({
    content:"",
    id:Number(id),
  });

  const onClickEditHandler = () => {
    dispatch(
      __editinstas(editContent)
    )

  }


  const [toggle, setToggle] = useState(false);
  const editToggleHandler = () =>{
    toggle ? setToggle(false) : setToggle(true);
  }

  const [imgtoggle, setImgToggle] = useState(false);
  

  const imgToggleHandler = () => {
    imgtoggle ? setImgToggle(false) : setImgToggle(true)
  }
  
  return (
    <>
      <Bg>
      <Container>
      {
        contents.map((item) => (item.id === Number(id) ) && (
        <>
        <div key={item.id}>
                <Iheader>
                  <Info>
                  <Imgps src="../images/tobin.png"/>
                  <Fontnickname>{item.author}</Fontnickname>
                  </Info>
                </Iheader>
                <div><Image src={item.image}/></div>
                <TextBox>
                  { imgtoggle == true ?
                  <Himg  onClick={imgToggleHandler}src="../images/free-icon-heart-1077035.png" />
                  :
                  <Himg  onClick={imgToggleHandler}src="../images/free-icon-hearts-138533.png" />
                  }
                  <Himg2  src="../images/chat.png" />
                  <Himg3  src="../images/send.png" />
                  <Himg4  src="../images/ribbon.png" />
                  <p>닉네임</p>
                  <p>{item.author}&nbsp;{item.content}</p>
                  <Span>작성날짜</Span>
                  </TextBox>
            </div>
        </>  
        )
        )
      }
      </Container>
      <Edit>
          <Editbox>
            
            <div><Input type="text" name="content" onChange={(event) => {setEditContent({
              ...editContent, content:event.target.value
            })}}/>
           </div> 
           <Button2 onClick={onClickEditHandler}>수정완료</Button2>
          </Editbox>
          
      </Edit>
      <Comments />
   </Bg>
    </>
  )
}

export default EditPage ;
const Button2 = styled.button`
  margin-left:10px;
`
const Editbox = styled.div`
  display:flex;
`
const Input = styled.input`
  width:350px;
  height:50px;
`
const Image = styled.img`
  width:440px;
  height:400px;
`
const TextBox= styled.div`
  padding:8px 13px;
`
const Imgps = styled.img`
  width:30px;
  height:30px;
`
const Span = styled.span`
  font-size:12px;
  color:#696969;
`
const Bg =styled.div`
  width: 1000px;
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
const Himg = styled.img`
  width:22px;
  height:22px;
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
const Fontnickname = styled.p`
font-weight:600;
color:#333;
font-size:12px;
line-height:30px;
margin-left:10px;
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
const Edit = styled.div`

`