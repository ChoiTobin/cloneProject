import React, { useState , useRef} from "react";
import styled from 'styled-components'
import { useDispatch  } from "react-redux";
import { __addinstas} from "../redux/modules/AddPageSlice"
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

const Addpage = () => {
  
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [instasContent, setInstasContent] =useState ({
    content:"",
    id:0,
  })
  
  const onChangeHandler = (e) => {
  const { name, value } = e.target;
  setInstasContent({...instasContent,[name]: value,});
  };
  const [imageUrl, setImageUrl] = useState(null);
  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();

  const onChangeImage = () => {
    const reader = new FileReader();
    const file = imgRef.current.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
      setImgFile(file);
    };
  };

  const onClickButton = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", imgFile);
    formData.append("content",instasContent.content);

    for (var pair of formData.entries()) {
    }

    dispatch(__addinstas(formData))

  };

  return (
      <Container1>
          <Header>
              <Span1>취소</Span1>
              <Span2>작성</Span2>
            <Button2 onClick={onClickButton}>완료</Button2>
          </Header>
        <FlexContainer>
            <div>
              <label htmlFor="imgFile" />
              <Img src={imageUrl} />
              <input type="file" id="imgFile" onChange={onChangeImage} accept="image/*" ref={imgRef} name="imgFile" multiple />
            </div>
            <div>
              <Flexminibox>
                <Logo  src="./images/tobin.png" />
                <Text>coetobin</Text>
              </Flexminibox>
              <div><Textarea name="content" value={instasContent.content} onChange={onChangeHandler} placeholder="내용을 입력해주세요" > </Textarea></div>
            </div>
        </FlexContainer>
      </Container1>
  );
}

export default Addpage

const Container1 = styled.div`
width:700px;
border:1px solid #ddd;
border-radius:5px;
border-radius:10px;
`
const Flexminibox = styled.div`
display:flex;
margin-top:10px;
margin-left:10px;
margin-bottom:10px;
`
const Logo = styled.img`
width:25px;
height:25px;
`
const Span1 = styled.span`
  width:300px;
  font-size:14px;
  font-weight:600;
  color:#454545;
`
const Span2 = styled.span`
  width:300px;
  font-weight:600;
`
const Text = styled.div`
margin-top:2px;
text-indent:7px;
font-weight:800
`
const Textarea = styled.textarea`
width:390px;
height:270px;
border:none;
`
const FlexContainer = styled.div`
display:flex;
`
const Header =styled.div`
width:700px;
height:50px;
border-bottom:1px solid #ddd;
line-height:50px;
display:flex;
justify-content:space-around;

`
const Img = styled.img`
  width:300px;
  height:300px;
  border:1px solid #ddd;
`
const Button2 = styled.button`
    width:50px;
    border:none;
    font-size:16px;
    
    background-color: transparent;
  `