import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

import { useParams } from "react-router-dom";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { usePlanets } from "../../hooks/usePlanets";

import genPicture from "../../assets/images/GenPlanets.jpg";

export const DetailPlanet = () => {
  const { back, getAllPlanets,dataPlanets} = usePlanets();
 

  const params = useParams();
  const listParams = [params];

  const mapeo = listParams.map((list) => list.linkname);
  const mapeo2 = listParams.map((list) => list.num);

  var nombre = mapeo[0];
  var numero = mapeo2[0];

  useEffect(() => {

    getAllPlanets(numero);

  }, []);

  const filtro = dataPlanets.filter((inFilter) => inFilter.name === nombre);

  return (
    <div>
      <Button className="btn-danger shadow mt-5 ms-5" onClick={back}>
        <IoReturnUpBackSharp size={30}/>  Volver a planetas
      </Button>
      <h1 className="text-center mb-5">Detalle Planeta</h1>
      <div className="container mb-5">
        <div className="card mb-3 shadow bg-warning">
          <div className="row g-0">
            <div className="col-md-5 d-md-none d-lg-block">
              <img src={genPicture}  width={400} className="img-fluid img-top" alt="General"/>
            </div>
            <div className="col-md-7">
              <div className="card-body text-light">
                <div className="ms-4 text-danger"><h3 className="card-title">Nombre planeta: {nombre}</h3></div>
                <div className="ms-4">
                {filtro.map((planeta) => (
                  <div key={planeta.name} className="row mt-4 text-black">
                    <div className="col-md-6">
                      <p><b>Creado:</b> {planeta.created}</p>
                      <p><b>Periodo de rotación:</b> {planeta.rotation_period}</p>
                      <p><b>Periodo orbital:</b> {planeta.orbital_period} cm</p>
                      <p><b>Diametro:</b> {planeta.diameter} kg</p>
                      <p><b>Clima:</b> {planeta.climate}</p>
                    </div>
                    <div className="col-md-6">
                      <p><b>Gravedad:</b> {planeta.gravity}</p>
                      <p><b>Terreno:</b> {planeta.terrain}</p>
                      <p><b>Agua superficial:</b> {planeta.superface_water}</p>
                      <p><b>Población:</b> {planeta.population}</p>
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};
