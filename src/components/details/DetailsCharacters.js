import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { usePerson } from "../../hooks/usePerson";
import { useParams } from "react-router-dom";
import { IoReturnUpBackSharp } from "react-icons/io5";
import genPicture from "../../assets/images/Img2.jpg";
import { useDetailsChar } from "../../hooks/useDetailsChar";

export const DetailCharacter = () => {
  const { back, getAllPerson, dataPeople } = usePerson();
  const { filmsDe, speciesDe, vehiclesDe, starshipsDe, getAllData, dataChar } = useDetailsChar();


  const params = useParams();
  const listParams = [params];

  const mapeo = listParams.map((list) => list.linkname);
  const mapeo2 = listParams.map((list) => list.num);

  var nombre = mapeo[0];
  var numero = mapeo2[0];

   
  useEffect(() => {

    getAllPerson(numero);
    getAllData(numero, nombre);
    // console.log("IMPRIMIR",filmsDe);

  }, []);
  
  const filtro2 = dataPeople.filter((inFilter) => inFilter.name === nombre);

  
  return (
    <div>
      <Button className="btn-danger shadow mt-5 ms-5" onClick={back}>
        <IoReturnUpBackSharp size={30}/>  Volver a personajes
      </Button>
      <h1 className="text-center mb-5">Detalle Personaje</h1>
      <div className="container mb-5">
        <div className="card mb-3 shadow bg-dark">
          <div className="row g-0">
            <div className="col-md-5 d-md-none d-lg-block">
              <img src={genPicture} className="img-fluid img-top" alt="General"/>
            </div>
            <div className="col-md-7">
              <div className="card-body text-light">
                <div className="ms-4 text-warning"><h3 className="card-title">Nombre personaje: {nombre}</h3></div>
                <div className="ms-4">
                {filtro2.map((persona) => (
                  <div key={persona.name} className="row mt-4">
                    <div className="col-md-6">
                      <p><b>Creado:</b> {persona.created}</p>
                      <p><b>Año de nacimiento:</b> {persona.birth_year}</p>
                      <p><b>Altura:</b> {persona.height} cm</p>
                      <p><b>Peso:</b> {persona.mass} kg</p>
                      <p><b>Genero:</b> {persona.gender}</p>
                    </div>
                    <div className="col-md-6">
                      <p><b>Editado:</b> {persona.edited}</p>
                      <p><b>Color de ojos:</b> {persona.eye_color}</p>
                      <p><b>Color de cabello:</b> {persona.hair_color}</p>
                      <p><b>Color de piel:</b> {persona.skin_color}</p>
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container d-flex flex-wrap justify-content-center">
          <div className="card mt-3 mx-1 shadow bg-dark" style={{ width: '18rem' }}>
            <div className="card-body text-light">
              <div className="ms-2 text-warning">
                <h3 className="card-title">Vehicles</h3>
              </div>
              <div className="ms-2 mt-1 text-warning">
              {/* {filmsDe.map((filmsPer) => (
                    <h1>{filmsPer}</h1>
                ))} */}
              </div>
            </div>
          </div>

          <div className="card mt-3 mx-1 shadow bg-dark" style={{ width: '18rem' }}>
            <div className="card-body text-light">
              <div className="ms-2 text-warning">
                <h3 className="card-title">Starships</h3>
              </div>
              <div className="ms-2 mt-1 text-warning">

              </div>
            </div>
          </div>

          <div className="card mt-3 mx-1 shadow bg-dark" style={{ width: '18rem' }}>
            <div className="card-body text-light">
              <div className="ms-2 text-warning">
                <h3 className="card-title">Species</h3>
              </div>
              <div className="ms-2 mt-1 text-warning">

              </div>
            </div>
          </div>

          <div className="card mt-3 mx-1 shadow bg-dark" style={{ width: '18rem' }}>
            <div className="card-body text-light">
              <div className="ms-2 text-warning">
                <h3 className="card-title">Films</h3>
              </div>
              <div className="ms-2 mt-1 text-warning">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
