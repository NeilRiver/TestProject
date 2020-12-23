import React from 'react'
import styles from './Search.module.css';

const axios = require('axios');

function Search(props) {

    let temptext;

    const inputData = (e) => {
        return temptext = e.target.value;
    };


    const f = async (idText) => {
        await axios.post('http://192.168.13.2:1337/192.168.13.2:56000/json/reply/GetArticle', {
             id: idText,
         }, {
             headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json',
             }
         }).then(function (response) {
             //console.log(response.data.article);
             //props.setCount(response.data.article);
             return(response.data.article);
         }).catch(function (error) {
             console.log(error);
         });
     }



    const GetArticle = async (arrayOfId) => {

        let a=[];

       
        for (let i = 0; i < arrayOfId.length; i++) {
         a.push( await f(arrayOfId[i]) );
         //hz
        }

        return a;

    }

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
            // console.log(response.data.result);
            //props.setCount(response.data.result);

            return Object.keys(response.data.result).map(x => response.data.result[x].id);
        }).catch(function (error) {
            console.log(error);
        });

        const parseData =  GetArticle(arrayOfIdArticle);
        console.log(parseData);
        props.setCount(parseData);
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
