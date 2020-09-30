import React, { useEffect, useState } from 'react';

export const Message = () => {
    const [coords, setCoords] = useState({x:0,y:0});
    const {x,y} = coords;

    useEffect(() => {
        const mouseMove = (e)=>{
            const coors = {x:e.x,y:e.y};
            setCoords(coors);     
        }
        window.addEventListener('mousemove',mouseMove); //Crear listener
        return () => {
            window.removeEventListener('mousemove',mouseMove); //Eliminar listener
            console.log(`Componente desmontado`);
        }
    }, [])
    return (
        <>
            <div>Ya puedes Guardar</div>
            <p>x:{x}, y:{y}</p>
        </>
    )
}
