import React, { useState , useRef} from "react";
import styled from 'styled-components'
// import { useDispatch ,useSelector } from "react-redux";
import { useDispatch  } from "react-redux";
import { __addinstas} from "../redux/modules/AddPageSlice"


const Addpage = ({ isOpen }) => {
  const dispatch = useDispatch();

  // const mainlistCo = useSelector((state) => state.mainlist)
  
  const [instasContent, setInstasContent] =useState ({
    content:"",
    id:0,
  })
  
  const onChangeHandler = (e) => {
  const { name, value } = e.target;
  setInstasContent({...instasContent,[name]: value,});
  };
    
  
  // Ref가 변경시 랜더링을 발생시키지말아야 할때 편리하다
  // 이미지
  const [imageUrl, setImageUrl] = useState(null);
  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();

  //썸네일바꾸는부분
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
      console.log(pair[0] + ", " + pair[1]);
    }
    dispatch(__addinstas(formData))
  };

  return (
    
    <BigContainer>
      
      <Container>
        <Header>
          <div>뒤로가기버튼</div>
          <div>새 게시물 만들기</div>
          <Button onClick={onClickButton}>공유하기</Button>
        </Header>
        <Container2>
          <ImgBox>
            <label htmlFor="imgFile" />
            <Stimg src={imageUrl} />
            <ImgInput type="file" id="imgFile" onChange={onChangeImage} accept="image/*" ref={imgRef} name="imgFile" multiple />
          </ImgBox>
          <Commentbox>
            <div><Span></Span>닉네임</div>
            <Textarea name="content" value={instasContent.content} onChange={onChangeHandler} placeholder="내용을 입력해주세요" > 네네 </Textarea>
          </Commentbox>
            
        </Container2>
      </Container>
    </BigContainer>
  );
}

export default Addpage



const Textarea = styled.textarea`
  display;block;
  width:326px;
  height:300px;
  border:0px solid black;

`
const Commentbox =styled.div`
  text-indent:10px;
`
const ImgInput = styled.input`
   display:block;
   
`
const Span =styled.span`
  display:iblock;
  width:30px;
  height:30px;
  background-color:#ddd;
  border-radius:50px;
`
const Header = styled.div`
  width:1000px;
  height:50px;
  border:1px solid #ddd;
  line-height:50px;
  display:flex;
  justify-content:space-between;
  font-size:13px;
  padding:0 15px;
`
const Button = styled.button`
  border:none;
  background-color:#fff;
  height:5px
`
const BigContainer = styled.div`
  position:relative;
  width:100%;
  height:100%;
`
const ImgBox =styled.div`
  
`
const Container = styled.div`
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, 20%);

`
const Stimg = styled.img`
  img {
    height:400px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
    margin: 20px 0;
    width:700px;
    height:400px;
    text-align:center;
    background-color:#ddd;
    line-height:300px;
`

const Input =styled.input`
  display:block;
  width:200px;
  hegith:400px;
  border: 1px solid #ddd;
`
const Container2 =styled.div`
display:flex;
`
