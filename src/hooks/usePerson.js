// import React from 'react';

import { useState } from "react";

export const usePerson = () => {

    const [dataPeople, setDataPeople] = useState([]);
    const [Counter, setCounter] = useState(1);
    

    const Preview = () => {
      if (Counter <= 1) {
        setCounter(1);
      } else{
        setCounter(Counter - 1);
      }
    }

    const Next = () => {
      if (Counter >= 9){
        setCounter(9);
      } else {
        setCounter(Counter + 1);
      }
    }

    const back = ()=>{
      window.history.go(-1);
    }

    const getAllPerson = async(numberPage)=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://swapi.dev/api/people/?page=${numberPage}`, requestOptions)
            .then(response => response.json())
            .then(result => setDataPeople(result.results))
            .catch(error => console.log('error', error));
    }

  return {
    getAllPerson,
    dataPeople,
    Preview,
    Next,
    Counter,
    back
  };
};
 