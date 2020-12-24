import React from 'react'
import styles from './Search.module.css';

const axios = require('axios');

function Search(props) {

    let temptext = "Оружие Зеландия Лукашенко Новый мир";

    const inputData = (e) => {
        return temptext = e.target.value;
    };

    // This function implement REST API POST query , and return <Promis>
    const fetchOneID = (idText) => {
        const result = axios.post('http://192.168.13.2:1337/192.168.13.2:56000/json/reply/GetArticle', {
            id: idText,
        }, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(function (response) {
            // console.log("->",response.data.article)
            return response.data.article;
        }).catch(function (error) {
            console.log(error);
        });

        return result;
    }

    // Const use .map function for return new array of  <Promeses> 
    const GetArticle = (arrayOfId) => arrayOfId.map((x) => fetchOneID(x));

    const ArticleSearch = async (str) => {

        // REST API (POST) -> ArticleSearch -> Input :  Array of id  [ 123, 456, 789]
        const arrayOfIdArticle = await axios.post('http://192.168.13.2:1337/192.168.13.2:56000/json/reply/ArticleSearch', {
            text: str,
            sorces: "[articles]",

        }, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(function (response) {
            return Object.keys(response.data.result).map(x => response.data.result[x].id);
        }).catch(function (error) {
            console.log(error);
        });

        // Array of id -> GetArticle -> Input : Array of <Promise> [<Promise>, <Promise>, <Promise>]
        const parseData = await GetArticle(arrayOfIdArticle);

        // Await all promises in array and use React.Hock to send this array in global "store" 
        Promise.all(parseData).then(
            data => props.setCount(data)
        )
    }

    // function ShowData() {
    //     props.setCount(temptext);
    // };

    return (
        <div className={styles.Search}>
            <input onChange={(e) => inputData(e)} defaultValue="Оружие Зеландия Лукашенко Новый мир"></input>
            <button onClick={() => ArticleSearch(temptext)}>Ok</button>
        </div>
    )
}

export default Search
