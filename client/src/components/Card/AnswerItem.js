import React, { Component } from 'react'
import { Grid } from '@material-ui/core';
import '../Quiz/quiz.css';



export default function AnswerItem (props) {
    return(
    <div>
        <div className="qp-content__question">
                <h2> {props.question}</h2>
            </div>
            <div className="qp-content__answer">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <button className="qp-button__answer" >{props.answer_1} </button>
                </Grid>
                <Grid item xs={6}>
                    <button className="qp-button__answer"  >{props.answer_2}</button>
                </Grid>
                <Grid item xs={6}>
                    <button className="qp-button__answer"  >{props.answer_3}</button>
                </Grid>
                <Grid item xs={6}>
                    <button className="qp-button__answer"  >{props.answer_4}</button>
                </Grid>
                </Grid>
        </div>
    </div>
    )

}