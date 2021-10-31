import React, { Component } from 'react'
import { Grid } from '@material-ui/core';
import '../Quiz/quiz.css';




export default function AnswerItem (props) {

    const chooseAnswer = (e) => {
        const answer = document.querySelectorAll(".qp-button__answer")
        
        answer.forEach(element => {
            element.classList.remove("qp-active")
            if(e.target === element){
                element.classList.add("qp-active")
            }
        })
    }
    

    
    
    return(
    <div>
        <div className="qp-content__question">
                <h2> {props.question}</h2>
            </div>
            <div className="qp-content__answer">
            <div className="trueAnswer">{props.true_answer}</div>
            <div className="key">{props.key}</div>
            <Grid container>
                <Grid item xs={6}>
                    <button className="qp-button__answer" id="answer_1" onClick={(e)=> chooseAnswer(e)} >{props.answer_1} </button>
                </Grid>
                <Grid item xs={6}>
                    <button className="qp-button__answer " id="answer_2" onClick={(e)=> chooseAnswer(e)} >{props.answer_2}</button>
                </Grid>
                <Grid item xs={6}>
                    <button className="qp-button__answer " id="answer_3" onClick={(e)=> chooseAnswer(e)} >{props.answer_3}</button>
                </Grid>
                <Grid item xs={6}>
                    <button className="qp-button__answer" id="answer_4" onClick={(e)=> chooseAnswer(e)} >{props.answer_4}</button>
                </Grid>
            </Grid>
        </div>
    </div>
    )

}