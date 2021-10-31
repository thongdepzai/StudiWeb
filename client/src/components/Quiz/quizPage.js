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
import { useState } from 'react';
import { display } from '@mui/system';
import { CssBaseline } from '@material-ui/core';


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
        "skill": "unit1",
    },
    {
        "id" : 2,
        "question": "This plant looks dead.",
        "answer_1": "It's in the garden.",
        "answer_2": "It only needs some water.",
        "answer_3": "It's sleeping.",
        "answer_4": "What your name?",
        "true_answer": "answer_3",  
        "skill": "unit1",
    },
    {
        "id" : 3,
        "question": "This plant looks dead.",
        "answer_1": "It's in the garden.",
        "answer_2": "It only needs some water.",
        "answer_3": "It's sleeping.",
        "answer_4": "What your name?",
        "true_answer": "answer_3",  
        "skill": "unit2",
    },
    {
        "id" : 4,
        "question": "This plant looks dead.",
        "answer_1": "It's in the garden.",
        "answer_2": "It only needs some water.",
        "answer_3": "It's sleeping.",
        "answer_4": "What your name?",
        "true_answer": "answer_3",  
        "skill": "unit1",
    },
    {
        "id" : 5,
        "question": "This plant looks dead.",
        "answer_1": "It's in the garden.",
        "answer_2": "It only needs some water.",
        "answer_3": "It's sleeping.",
        "answer_4": "What your name?",
        "true_answer": "answer_3",  
        "skill": "unit3",
    }

]


function QuizPage(){
    // get element
   
    
    
    // lay unit hien tai
    const unitCurrent = [];
        for(const unit of Unit){
            if(unit.skill == "unit1"){
                unitCurrent.push(unit)
        }
    }
    // bien flow set cau hien thi ke tiep
    const [flow, setFlow] = useState(0);
    const [alert, setAlert] = useState();

    
    const submit = (e)=> {
        const trueAnswer = document.querySelector(".trueAnswer").innerText;
        const Answer = document.getElementById(trueAnswer).innerText;
        const chooseAnswer = document.querySelector(".qp-active")
        const btnSubmit = document.querySelector(".btn-submit")
        const btnContinue = document.querySelector(".btn-continue")
        const background = document.querySelector(".background")
        if(!chooseAnswer){



        }else{
            var ktra = false;
            if(chooseAnswer.innerText === Answer){
                ktra = true;
            }
            if(ktra){
                setAlert("câu trả lời chính xác !")
                btnSubmit.classList.toggle("display-none")
                btnContinue.classList.toggle("display-block")
                background.classList.toggle("display-block")
            }else{
                setAlert("câu trả lời sai !")
                btnSubmit.classList.toggle("display-none")
                btnContinue.classList.toggle("display-block")
                background.classList.toggle("display-block")
            }
        }

    }
    const handleContinue = () =>{
        const btnSubmit = document.querySelector(".btn-submit")
        const btnContinue = document.querySelector(".btn-continue")
        const btnCompleted = document.querySelector(".btn-completed")
        const background = document.querySelector(".background")
        
        if((flow + 1) < unitCurrent.length){
            btnContinue.classList.toggle("display-block")
            background.classList.toggle("display-block")
            btnSubmit.classList.toggle("display-none")
            setFlow(flow + 1);
        }else{
            btnContinue.classList.remove("display-block")
            btnCompleted.classList.add("display-block")
        }
        

    }
    
    return(
        <div className="fullscreen">
            <CssBaseline/>
            <Container className="qp-container--top">
            <div className="qp-content">
            <AnswerItem
                key = {unitCurrent[flow].id}
                question = {unitCurrent[flow].question}
                answer_1 = {unitCurrent[flow].answer_1}
                answer_2 = {unitCurrent[flow].answer_2}
                answer_3 = {unitCurrent[flow].answer_3}
                answer_4 = {unitCurrent[flow].answer_4}
                true_answer = {unitCurrent[flow].true_answer}
            ></AnswerItem>
               
            </div>
            <div className="background">
                <p>{alert}</p>
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
                <button className="btn-continue"  onClick = {() => handleContinue()}>Continue</button>
                <button className="btn-submit"  onClick = {(e) => submit(e)}>Submit</button>
                <button className="btn-completed"  >Completed</button>
                </div>
            </div>
            </div>
        </div>
        
    );

}
export default QuizPage;