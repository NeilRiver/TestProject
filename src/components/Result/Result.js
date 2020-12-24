import React from 'react'
import TabResult from './TabResult/TabResult';

const axios = require('axios');

function Result(props) {

    function showData(id, title, text) {

        //console.log(`${id}\n${title.substring(0, 10)}\n${text.substring(0, 100)}`);
        return props.setTab([...props.tabInfo, { id: id, title: title }])
    }

    return (
        <div style={{ "margin": "20px 0 0 0" }}>
            {props.inputQuery === ""
                ? <h1>Result</h1>
                : Object.keys(props.inputQuery).map((x, i) =>
                    <TabResult
                        key={i}
                        showData={() => showData(props.inputQuery[x].id, props.inputQuery[x].title, props.inputQuery[x].text)}
                        id={props.inputQuery[x].id}
                        title={props.inputQuery[x].title}
                        text={props.inputQuery[x].text}
                    />)}
        </div>
    )
}

export default Result
