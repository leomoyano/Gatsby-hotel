import React from "react";
import { css } from "@emotion/core";
import Layout from "../components/layout";
import ImagenHotel from "../components/imagenHotel";
import ContenidoInicio from "../components/contenidoInicio";
import useHabitaciones from "../hooks/use-habitaciones";
import HabitacionPreview from "../components/habitacionPreview";


const Index = () => {

  const habitaciones = useHabitaciones();

  console.log(habitaciones);

  return (

    <Layout>
      <ImagenHotel />
      <ContenidoInicio />

      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >
        Nuestras habitaciones
        </h2>
      <ul>
        {habitaciones.map((habitacion) => (
          <HabitacionPreview
            key={habitacion.id}
            habitacion={habitacion}
          />
        ))}
      </ul>

    </Layout>

  )
}

export default Index
