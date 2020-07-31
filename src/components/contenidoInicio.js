import React from 'react'
import {graphql, useStaticQuery} from 'gatsby';
import Image from 'gatsby-image';

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
            <h2>{titulo}</h2>
            <div>
              <p>{contenido}</p>
              <Image fluid={imagen.fluid} />
            </div>
        </>
    )
}

export default ContenidoInicio
