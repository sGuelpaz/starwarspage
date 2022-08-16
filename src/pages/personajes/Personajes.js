import React, { useEffect} from 'react';
import { usePerson } from '../../hooks/usePerson';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export const Personajes = () => {

  const {getAllPerson,dataPeople} = usePerson();

  useEffect(()=>{

    getAllPerson();

    console.log(dataPeople);

  }, [])
  return (
    <div>
      <div className='text-center'><h1 className='m-4'>Personajes:</h1></div>
      <div className='d-flex flex-wrap '>
      {dataPeople.map((people) => (
        
            <Card
            bg='warning'
            key='dark'
            text='black'
            style={{ width: '17rem' }}
            className="m-3"
            >
            {/* <Card.Img variant="top" src={image} /> */}
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                <div className='text-center'><h4>{people.name}</h4></div>
                <strong>Altura:</strong> {people.height} <hr/>
                <strong>Peso:</strong> {people.mass} Kg <hr/>
                <strong>Cumpleaños:</strong> {people.birth_year} <hr/>
                <strong>Genero:</strong> {people.gender} <hr/>
                </Card.Text>
                <div className='text-center'><Button className="m-auto" variant="dark">Ir</Button></div>
            </Card.Body>
        </Card>
      ))}
      </div>
    </div>
  )
}
