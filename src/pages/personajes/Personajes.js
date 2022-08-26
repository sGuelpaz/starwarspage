import React, { useEffect, useState } from 'react';
import { usePerson } from '../../hooks/usePerson';
import { Card, ListGroupItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ImgChar from '../../assets/images/StarWarsChar.jpg'
import { ListGroup } from 'react-bootstrap';
import './estilosPersonajes.css';
import { ImNext2 } from "react-icons/im";
import { ImPrevious2 } from "react-icons/im";
import {Link} from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';


export const Personajes = () => {

  const {getAllPerson,dataPeople, Counter, Preview, Next} = usePerson();
  const [disabledL, setDisabledL] = useState(false);
  const [disabledR, setDisabledR] = useState(false);


  useEffect(()=>{

    getAllPerson(Counter);

    if(Counter ===9){
      setDisabledR(true);
    } else {
      setDisabledR(false);
    }

    if(Counter ===1){
      setDisabledL(true);
    } else {
      setDisabledL(false);
    }
  
    
  }, [dataPeople])
  return (
    <div>
      <div className='text-center'><h1 className='m-4'>Personajes:</h1></div>
      <div className='d-flex flex-wrap'>
      {dataPeople.map((chars) => (
        
            <Card
            bg='warning'
            key={chars.name}
            text='black'
            style={{ width: '17rem' }}
            className="m-3 shadow"
            >
            <Card.Img variant="top" src={ImgChar} />
            <Card.Body>
                <Card.Title className="text-center"><h4>{chars.name}</h4></Card.Title>
                <ListGroup>

                  <ListGroup.Item><strong>Altura:</strong> {chars.height}</ListGroup.Item>
                  <ListGroup.Item><strong>Peso:</strong> {chars.mass} Kg</ListGroup.Item>
                  <ListGroup.Item><strong>Cumpleaños:</strong> {chars.birth_year}</ListGroup.Item>
                  <ListGroup.Item><strong>Genero:</strong> {chars.gender}</ListGroup.Item>
                  <ListGroup.Item><strong>Color de ojos:</strong> {chars.eye_color}</ListGroup.Item>
                  <ListGroup.Item><strong>Color de cabello:</strong> {chars.hair_color}</ListGroup.Item>
                  
                </ListGroup>
                
                
                
                
               
                <div className='text-center mt-3'>
                  <Link to={`/details/${chars.name}/${Counter}`} key ={chars.name}>
                  <Button className="m-auto" variant="dark"><FaAlignRight/>  Detalles</Button>
                  </Link>
                  </div>
            </Card.Body>
        </Card>
      ))}
      <div className='container text-center'>
        <Button id="back" className='mx-2 text-light shadow' disabled={disabledL} variant='dark' onClick={Preview}><ImPrevious2/></Button>
        <strong>{Counter}</strong>
        <Button id="next" className='mx-2 text-light shadow' disabled={disabledR}  variant='dark' onClick={Next}><ImNext2/></Button>
      </div>
      </div>
    </div>
  )
}
