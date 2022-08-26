// import React from 'react';

import { useState } from "react";

export const usePlanets = () => {

    const [dataPlanets, setDataPlanets] = useState([])

    const [Counter, setCounter] = useState(1);

    const Preview = () => {
      if (Counter <= 1) {
        setCounter(1);
      } else{
        setCounter(Counter - 1);
      }
    }

    const Next = () => {
      if (Counter >= 6){
        setCounter(6)
      } else {
        setCounter(Counter + 1);
      }
    }

    const getAllPlanets = (numberPage)=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://swapi.dev/api/planets/?page=${numberPage}`, requestOptions)
            .then(response => response.json())
            .then(result => setDataPlanets(result.results))
            .catch(error => console.log('error', error));
    }

  return {
    getAllPlanets,
    dataPlanets,
    Preview,
    Next,
    Counter
  };
}