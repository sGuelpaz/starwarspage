import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { usePerson } from "../../hooks/usePerson";
import { useParams } from "react-router-dom";
import { IoReturnUpBackSharp } from "react-icons/io5";
// import { usePlanets } from "../../hooks/usePlanets";

import genPicture from "../../assets/images/Img2.jpg";

export const DetailCharacter = () => {
  const { back, getAllPerson, dataPeople } = usePerson();
  // const { getPlanetPerson, dataPlanetPerson } = usePlanets();

  const params = useParams();
  // console.log(params);
  const listParams = [params];

  const mapeo = listParams.map((list) => list.linkname);
  const mapeo2 = listParams.map((list) => list.num);

  var nombre = mapeo[0];
  var numero = mapeo2[0];

  useEffect(() => {

    getAllPerson(numero);

  }, []);

  // console.log(numero);

  const filtro = dataPeople.filter((inFilter) => inFilter.name === nombre);

  // console.log(filtro);

  // const mapeo3 = filtro.map((per) => per.homeworld);
  // var homeWorld = mapeo3[0];
  // console.log(homeWorld);

  // useEffect(() => {

  //   getPlanetPerson(homeWorld);

  // }, [dataPlanetPerson]);

  // console.log(dataApi)

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
                {filtro.map((persona) => (
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
        {/* <div className="container">
          <div className="row">
            <div className="col">
              {dataPlanetPerson.map((world) => (
                <div key={world.name} className="card text-white bg-dark mb-3" style="max-width: 18rem;">
                  <div className="card-header">Homeworld</div>
                  <div className="card-body">
                    <h5 className="card-title">{world.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
