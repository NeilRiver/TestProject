import React from 'react'
import TabResult from './TabResult/TabResult';

const axios = require('axios');

function Result(props) {



    const GetArticle = (str) => {
        axios.post('http://192.168.13.2:1337/192.168.13.2:56000/json/reply/GetArticle', {
            id: str,
        }, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(function (response) {
                console.log(response.data.article)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    




    return (
        <div style={{ "margin": "20px 0 0 0" }}>
            {props.inputQuery === ""
                ? <h1>Result</h1>
                : Object.keys(props.inputQuery).map( (x,i) =>i )}
        </div>
    )
}

export default Result
