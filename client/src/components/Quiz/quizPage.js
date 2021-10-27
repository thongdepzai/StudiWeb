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
    const [answer, setAnswer] = useState();
    const [count,setCount] = useState(0);

    
    const submit = (e)=> {
        const trueAnswer = document.querySelector(".trueAnswer").innerText;
        const Answer = document.getElementById(trueAnswer).innerText;
        const chooseAnswer = document.querySelector(".qp-active")
        const btnSubmit = document.querySelector(".btn-submit")
        const btnContinue = document.querySelector(".btn-continue")
        const background = document.querySelector(".background")
        const containerBottom = document.querySelector(".qp-container--bottom")
        const answerFalse = document.querySelector(".answer__false")
        const answerTrue = document.querySelector(".answer__true")
        const btnSkip = document.querySelector(".btn-skip")
       
        if(!chooseAnswer){
            
        }else{
            btnSkip.classList.add("display-none")
            
            var ktra = false;
            if(chooseAnswer.innerText === Answer){
                ktra = true;
            }
            if(ktra){
                // setAlert("câu trả lời chính xác !")
                btnSubmit.classList.toggle("display-none")
                btnContinue.classList.toggle("display-block")
                background.classList.toggle("display-block")
                containerBottom.classList.add("color__true")
                answerTrue.classList.add("display-block")
                setCount(count + 1);
            }else{
                setAnswer(Answer)
                btnSubmit.classList.toggle("display-none")
                btnContinue.classList.toggle("display-block")
                background.classList.toggle("display-block")
                containerBottom.classList.add("color__false")
                answerFalse.classList.add("display-block")
                
            }
        }
    }
    const handleContinue = () =>{
        const btnSubmit = document.querySelector(".btn-submit")
        const btnContinue = document.querySelector(".btn-continue")
        const btnCompleted = document.querySelector(".btn-completed")
        const background = document.querySelector(".background")
        const containerBottom = document.querySelector(".qp-container--bottom")
        const answerFalse = document.querySelector(".answer__false")
        const answerTrue = document.querySelector(".answer__true")
        const btnSkip = document.querySelector(".btn-skip")
        
        if((flow + 1) < unitCurrent.length){
            btnContinue.classList.toggle("display-block")
            background.classList.toggle("display-block")
            btnSubmit.classList.toggle("display-none")
            btnSkip.classList.remove("display-none")
            
            //answer
            answerTrue.classList.remove("display-block")
            answerFalse.classList.remove("display-block")
            // containerBottom
            containerBottom.classList.remove("color__false")
            containerBottom.classList.remove("color__true")
            
            //set cau hỏi tiếp theo
            setFlow(flow + 1);
        }else{
            btnContinue.classList.remove("display-block")
            btnCompleted.classList.add("display-block")
            //answer
            answerTrue.classList.remove("display-block")
            answerFalse.classList.remove("display-block")
            // containerBottom
            containerBottom.classList.remove("color__false")
            containerBottom.classList.remove("color__true")
        }
        
    }
    const handleCompleted = () =>{
        const backgroundBox = document.querySelector(".background__box")
        const boxCompleted = document.querySelector(".box__completed")
        backgroundBox.classList.add("display-block")
        boxCompleted.classList.add("display-block")
    }
    const handleSkip = () =>{
        const trueAnswer = document.querySelector(".trueAnswer").innerText;
        const Answer = document.getElementById(trueAnswer).innerText;
        const btnSubmit = document.querySelector(".btn-submit")
        const btnContinue = document.querySelector(".btn-continue")
        const background = document.querySelector(".background")
        const containerBottom = document.querySelector(".qp-container--bottom")
        const answerFalse = document.querySelector(".answer__false")
        const btnSkip = document.querySelector(".btn-skip")

        setAnswer(Answer)
        btnSkip.classList.add("display-none")
        btnSubmit.classList.toggle("display-none")
        btnContinue.classList.toggle("display-block")
        background.classList.toggle("display-block")
        containerBottom.classList.add("color__false")
        answerFalse.classList.add("display-block")
    }
    
    return(
        <div className="fullscreen">
            <div className="background-image"></div>
            <div className="background-color"></div>
            <div className="qp-container--top">
            <AnswerItem
                key = {unitCurrent[flow].id}
                question = {unitCurrent[flow].question}
                answer_1 = {unitCurrent[flow].answer_1}
                answer_2 = {unitCurrent[flow].answer_2}
                answer_3 = {unitCurrent[flow].answer_3}
                answer_4 = {unitCurrent[flow].answer_4}
                true_answer = {unitCurrent[flow].true_answer}
            ></AnswerItem>
               
            
            <div className="background"></div>
            </div>
            <div className="qp-container--bottom">
                <div className="wrapper--left">
                    <button className="btn-skip" onClick = {() => handleSkip()}>Skip</button>
                </div>
                <div className="wrapper--center">
                    <div className="answer__false">
                        <h2>Đáp Án Đúng :</h2>
                        <p className="inner_answer">{answer}</p>
                    </div>
                    <div className="answer__true">
                        <h2>Tuyệt Vời</h2>
                    </div>
                </div>
                <div className="wrapper--right">
                <button className="btn-continue"  onClick = {() => handleContinue()}>Continue</button>
                <button className="btn-submit"  onClick = {(e) => submit(e)}>Submit</button>
                <button className="btn-completed"  onClick = {() => handleCompleted()} >Completed</button>
                </div>
            </div>
            <div className="background__box"></div>
            <div className="box__completed">
                <div className="box__header">
                    <h2>Tổng kết</h2>
                </div>
                <div className="box__content">
                    <div className="box__content--text">
                        <p>Section : {unitCurrent[0].skill}</p>
                        <p>Level : Normal</p>
                        <p>Hoàn Thành : {count}/{unitCurrent.length}</p>
                        <p>Đánh Giá : </p>
                    </div>
                </div>
                <div className="box__btn">
                   <a className="btn-exit" href="/">Exit</a>
                </div>
            </div>
        </div>
        
    );

}
export default QuizPage;