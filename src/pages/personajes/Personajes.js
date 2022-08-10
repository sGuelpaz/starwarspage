import React, { useEffect } from 'react'
import {usePerson} from '../../hooks/usePerson';

export const Personajes = () => {

  const { getAllPerson } = usePerson();
  
  useEffect(() => {
    getAllPerson();
    console.log(getAllPerson());
  }, [])
  
  return (
    <div>Personajes</div>
  )
}
