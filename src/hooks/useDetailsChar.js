// import React from 'react';

import { useState } from "react";

export const useDetailsChar = () => {

  
    const [dataChar, setDataChar] = useState([]);
    const [filmsDe, setFilmsDe] = useState([]);
    const [speciesDe, setSpeciesDe] = useState([]);
    const [vehiclesDe, setVehiclesDe] = useState([]);
    const [starshipsDe, setStarshipsDe] = useState([]);






    const getAllData = async(numero, nombre)=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://swapi.dev/api/people/?page=${numero}`, requestOptions)
            .then(response => response.json())
            .then((result) => {
              setDataChar(result.results);
              const filtro = dataChar.filter((inFilter) => inFilter.name === nombre);
                setFilmsDe(filtro[0].films);
                // setSpeciesDe(filtro[0].films);
                // setVehiclesDe(filtro[0].films);
                // setStarshipsDe(filtro[0].films);
                console.log(filmsDe);
                // filtro[0].films.map((films) => (
                    // console.log(films)
                    // setFilmsDe([...filmsDe,films])
                    // ));
            //   filtro.species.map((species) => (
            //     setSpeciesDe([...speciesDe,species])
            //     ));
            //     filtro.vehicles.map((vehicles) => (
            //         setVehiclesDe([...vehiclesDe,vehicles])
            //       ));
            //       filtro.starships.map((starships) => (
            //         setStarshipsDe([...starshipsDe,starships])
            //         ));
            })
            .catch(error => console.log('error', error));
    }

    const = filmsNames = () => {
      for (var i = 0; i < nFilms; i++) {
        fetch(`${linkPelicula}`, requestOptions)
            .then(response => response.json())
            .then((result) => {
                setFilmsDe(filtro[0].films);
     }
    }
    // const filmsOrganization = () => {
    //         filmsDe.map((filmsPer) => (
    //                     fetch(`${films}`, requestOptions)
    //                       .then(response => response.json())
    //                       .then(result => setDataPlanets(result.results))
    //                       .catch(error => console.log('error', error));
    //                   ));
    //         }
    // const organizeFilms = async(urlFilms)=>{
    //     var requestOptions = {
    //         method: 'GET',
    //         redirect: 'follow'
    //       };
          
    //       fetch(`${urlFilms}`, requestOptions)
    //         .then(response => response.json())
    //         .then((result) => {
    //           setDataChar(result.results);
    //         })
    //         .catch(error => console.log('error', error));
    // }
  return {
    getAllData,
    dataChar,
    filmsDe,
    speciesDe,
    vehiclesDe,
    starshipsDe
  };
};
 