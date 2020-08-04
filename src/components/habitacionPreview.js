import React from 'react'

const HabitacionPreview = (habitacion) => {

    const {titulo, contenido, slug, imagen} = habitacion;

    return (
        <div>
            <div>{titulo}</div>
        </div>
    )
}

export default HabitacionPreview;
