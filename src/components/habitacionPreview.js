import React from 'react';
import Image from 'gatsby-image';

const HabitacionPreview = ({ habitacion }) => {

    const { titulo, contenido, slug, imagen } = habitacion;

    return (
        <div>
            <Image fluid={imagen.fluid} />
            <div>
                <h3>{titulo}</h3>
                <p>{contenido}</p>
            </div>
        </div>
    )
}

export default HabitacionPreview;