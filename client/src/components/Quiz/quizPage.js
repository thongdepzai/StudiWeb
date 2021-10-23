import React from 'react'
import {Checkbox, Container} from '@mui/material'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import './quiz.css';
import AnswerItem from '../Card/AnswerItem';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Unit = [
    {
        "id" : 1,
        "question": "Could you tell me your surname?",
        "answer_1": "Would you like me to spell it?",
        "answer_2": "Do you like my family name?",
        "answer_3": "How do I say that?",
        "answer_4": "What your name?",
        "true_answer": "answer_1",
    },
    {
        "id" : 2,
        "question": "This plant looks dead.",
        "answer_1": "It's in the garden.",
        "answer_2": "It only needs some water.",
        "answer_3": "It's sleeping.",
        "answer_4": "What your name?",
        "true_answer": "answer_3",  
    }

]
function quizPage(){


    const submit = (e)=> {
        const trueAnswer = document.querySelector(".trueAnswer").innerText;
        const Answer = document.getElementById(trueAnswer).innerText;
        const chooseAnswer = document.querySelector(".qp-active")
        if(!chooseAnswer){
            alert("chọn đáp án trước khi submit")
        }else{
            var ktra = false;
            if(chooseAnswer.innerText === Answer){
                ktra = true;
            }
            if(ktra){
                alert("câu trả lời chính xác !")
                e.target.innerText = "Continue"
            }else{
                alert("câu trả lời sai !")
                e.target.innerText = "Continue"
            }
        }

    
    }
    
    return(
        <div className="fullscreen">
            <Container className="qp-container--top">
            <div className="qp-content">
               <AnswerItem
               key = {Unit[0].id}
               question = {Unit[0].question}
               answer_1 = {Unit[0].answer_1}
               answer_2 = {Unit[0].answer_2}
               answer_3 = {Unit[0].answer_3}
               answer_4 = {Unit[0].answer_4}
               true_answer = {Unit[0].true_answer}
               ></AnswerItem>
            </div>
            </Container>
            {/* <div className="line"></div> */}
            <div className="qp-container--bottom">
            <div className="qp-buttons">
                <div className="wrapper--left">
                    <Button variant="outlined">Skip</Button>
                </div>
                <div className="wrapper--center">

                </div>
                <div className="wrapper--right">
                <Button size="large" variant="contained" onClick = {(e) => submit(e)}>Submit</Button>
                </div>
            </div>
            </div>
        </div>
        
    );

}
export default quizPage;