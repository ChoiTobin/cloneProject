// 콘솔 주석 완료
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {__addComment, __deleteComment, __getComment} from "../redux/modules/CommentsSlice"
import styled from "styled-components";

const Comments = () => {
    
  const { id } = useParams()
  let postId = Number(id)
  
  const dispatch  = useDispatch ("");
  const [comment, setComment] = useState({
    comment: "",
  });
  
  const comments = useSelector((state)=> state.comments.comments)
  
  const onChangeInputHandler = (event) => {
  const { name, value } = event.target;
      setComment({
        ...comment,
        [name]: value,
      });
  };

  const onAddCommentButtonHandler = (event) => {
    event.preventDefault();
    if (comment.comment.trim() === "") {
      return alert("모든 항목을 입력해주세요.");
    }
    
    dispatch(__addComment({postId, ...comment }));
    
    setComment({
      comment: "",
    });
  };
  // 댓글 삭제 버튼
  const onDeleteButton = (id) => {
  
      dispatch(__deleteComment({postId, id}))
      alert ("삭제하시겠습니까?")
  };
  //디스패치-명령 // 리스트로 
  useEffect(() => {
    dispatch(__getComment(postId));
  }, [dispatch]); 
return (
  <>
    <div >
      <Input
        placeholder="(100자 이내로 입력해주세요)"
        value={comment.comment}
        name="comment"
        type="text"
        onChange={onChangeInputHandler}
        maxLength={100}
      />
        <Button onClick={onAddCommentButtonHandler}>
            추가하기
        </Button>
    </div>
      
    <div>
        {   
        comments !== undefined&& (
          
          comments.map((item) => {
            return(

                <MentBox key={item.id}>
                  <Box>
                  <strong>{item.nickname}</strong>
                  <span>{item.comment}</span>
                  </Box>
                  <div><Button onClick={() => onDeleteButton(item.id)}>삭제하기</Button></div>
                </MentBox>
  
                    
          )})
          )
        }                    
    </div>
  </>
  )
}

export default Comments;

const Input = styled.input`
  width:350px;
  height:40px;
  text-indent:10px;
`

const Button = styled.button`
  margin-left:10px;
  height:45px;
  margin-top:10px;
`

const  MentBox =styled.div`
  width:440px;
  display:flex;
  justify-content:space-between;
  border-bottom:1px solid;
`
const Box = styled.div`
  line-height:63px;
  
`
