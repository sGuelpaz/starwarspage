import React, { useEffect, useState} from 'react';
import { usePlanets } from '../../hooks/usePlanets';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { ListGroup } from 'react-bootstrap';
import ImgPlan from '../../assets/images/ImgPlanetas.jpg'
import { ImNext2 } from "react-icons/im";
import { ImPrevious2 } from "react-icons/im";
import {Link} from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';

export const Planetas = () => {


  const {getAllPlanets,dataPlanets, Counter, Preview, Next} = usePlanets();
  const [disabledL, setDisabledL] = useState(false);
  const [disabledR, setDisabledR] = useState(false);

  useEffect(()=>{

    getAllPlanets(Counter);

    if(Counter ===6){
      setDisabledR(true);
    } else {
      setDisabledR(false);
    }

    if(Counter ===1){
      setDisabledL(true);
    } else {
      setDisabledL(false);
    }

  }, [dataPlanets])
  return (
    <div>
        <div className='text-center'><h1 className='text-danger m-4'>Planetas:</h1></div>
        <div className='d-flex flex-wrap'>
      {dataPlanets.map((planets) => (
        
        <Card
        bg='danger'
        key= {planets.name}
        text='black'
        style={{ width: '17rem' }}
        className="m-3 shadow"
        >
        <Card.Img variant="top" src={ImgPlan} />
        <Card.Body>
            <Card.Title className="text-center"><h4>{planets.name}</h4></Card.Title>
            <ListGroup>

              <ListGroup.Item><strong>Diametro:</strong> {planets.diameter}</ListGroup.Item>
              <ListGroup.Item><strong>Clima:</strong> {planets.climate} </ListGroup.Item>
              <ListGroup.Item><strong>Gravedad:</strong> {planets.gravity}</ListGroup.Item>
              <ListGroup.Item><strong>Terreno:</strong> {planets.terrain}</ListGroup.Item>
              <ListGroup.Item><strong>Población:</strong> {planets.population}</ListGroup.Item>
              <ListGroup.Item><strong>Creación:</strong> {planets.created}</ListGroup.Item>
              
            </ListGroup>
            
            
            
            
           
            <div className='text-center mt-3'>
              <Link to={`/detailsP/${planets.name}/${Counter}`} key={planets.name}>
              <Button className="m-auto" variant="dark"><FaAlignRight/> Detalles</Button>
              </Link>
              </div>
        </Card.Body>
    </Card>
      ))}
      <div className='container text-center'>
        <Button className='mx-2 text-light shadow' variant='dark' onClick={Preview} disabled={disabledL}><ImPrevious2/></Button>
        <strong>{Counter}</strong>
        <Button className='mx-2 text-light shadow' variant='dark' onClick={Next} disabled={disabledR}><ImNext2/></Button>
      </div>
      </div>
    </div>
  )
}