import CounterAction from "./../actions/counter";
// import React , { Component } from 'react';

export default class CounterMiddleware{
    static asyncIncrement(data){
        console.log("test",data);
        return(dispatch) => {
            data = data *2;
            dispatch(CounterAction.incrementWithValue(data))
        }
    }
}