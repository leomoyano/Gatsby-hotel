import React from 'react'
import {graphql, useStaticQuery} from 'gatsby';

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

  console.log(Informacion);

    return (
        <>
            <h2>Titulo de pagina</h2>
        </>
    )
}

export default ContenidoInicio
