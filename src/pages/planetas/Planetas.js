import React, { useEffect} from 'react';
import { usePlanets } from '../../hooks/usePlanets';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export const Planetas = () => {


  const {getAllPlanets,dataPlanets} = usePlanets();

  useEffect(()=>{

    getAllPlanets();

    console.log(dataPlanets);

  }, [])
  return (
    <div>
        <div className='text-center'><h1 className='text-danger m-4'>Planetas:</h1></div>
      {dataPlanets.map((planets) => (
        <div className='card' key={planets.name}>
          <h1> {planets.name} </h1>
          <p> {planets.created} </p>
        </div>
        
      ))}
    </div>
  )
}