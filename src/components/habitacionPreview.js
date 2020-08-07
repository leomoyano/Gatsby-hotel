import React from "react"
import Image from "gatsby-image"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Boton = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(44, 62, 80, 0.85);
  font-family: 'PT Sans', sans-serif;
  width: 100%;
  color: #fff;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
`;

const HabitacionPreview = ({ habitacion }) => {
  const { titulo, contenido, slug, imagen } = habitacion

  return (
    <div
      css={css`
        border: solid 1px #e1e1e1;
        margin-bottom: 2rem;
      `}
    >
      <Image fluid={imagen.fluid} />
      <div
        css={css`
          padding: 2rem;
        `}
      >
        <h3
          css={css`
            font-size: 3rem;
          `}
        >
          {titulo}
        </h3>
        <p>{contenido}</p>
        <Boton to={slug}>Ver Habitacion</Boton>
      </div>
    </div>
  )
}

export default HabitacionPreview
