import { useDispatch} from "react-redux";
import {__likePost} from "../redux/modules/AddPageSlice";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Likes =(props)=>{ 

    const dispatch = useDispatch();
    
    const [likes, setLikes] = useState(false)
    const [count, setCount] = useState(props.likesSize)


    useEffect(() => {
        dispatch(__likePost(props.id))
          }, [likes]);
          
    const onLike = () => {
        if(likes === true){
            setCount(count-1)
            setLikes(false)
        }else{
            setCount(count+1)
           setLikes(true)
        }
      }
    return(
        <>
            <LikeButton onClick={onLike}>{likes ? "❤️" : "🤍"}</LikeButton>
            <Span>{props.likesSize}</Span>
        </>
    )
}

export default Likes;

const LikeButton = styled.button`
    border: 0 solid transparent;
    background-color: transparent;
    color : gray;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    `

const Span = styled.span`
    font-size: 20px;
    padding: 5px;
    cursor: pointer;
    `