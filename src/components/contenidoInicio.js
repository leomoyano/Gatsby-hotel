import React from 'react'
import {graphql, useStaticQuery} from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';


const TextoInicio = styled.div`
  padding-top: 4rem;
  max-width: 95%;
  margin: auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  `;

const ContenidoInicio = () => {

const Informacion = useStaticQuery(graphql`
query {
    allDatoCmsPagina(filter: { slug: {eq: "Inicio"}}) {
      nodes {
      titulo
      contenido
      imagen{
        fluid{
          ...GatsbyDatoCmsFluid
        }
      }
    }
    }
  }`)

  console.log(Informacion.allDatoCmsPagina.nodes[0]);

  const {titulo, contenido, imagen} = Informacion.allDatoCmsPagina.nodes[0];

    return (
        <>
            <h2
              css={css`
              text-align: center;
              font-size: 4rem;
              margin-top: 4rem;
              }
              `}
            >
              {titulo}
            </h2>
            <TextoInicio>
              <p>{contenido}</p>
              <Image fluid={imagen.fluid} />
            </TextoInicio>
        </>
    )
}

export default ContenidoInicio
