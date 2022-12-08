import React from 'react'
import Card from './Card';

import fritosymas from '../assets/fritosymas.jpg'
import itailiares from '../assets/itailiares.jpg'
import pacificomar from '../assets/pacificomar.jpg'
import pollofrito from '../assets/pollofrito.jpg'

const cards = [
    {
        id: 1,
        title: 'Fritos y Más.',
        image: fritosymas,
        text: 'Calle 45 Medellin Comida Rapida'
        
    },
    {
        id: 2,
        title: 'Restaurante Italiano',
        image: itailiares,
        text:   'Av. 85 Nro. 1 - 85 Medellín Deliciosa comida Italiana'
    },
    {
        id: 3,
        title: 'Pacifico Mar.',
        image: pacificomar,
        text: 'Av. 85 Nro. 45 - 85 Barranquilla Deliciosa comida de mar'
    },
    {
        id: 4,
        title: 'Pollo Frito',
        image: pollofrito,
        text: 'Cr 32 # 56 - 89 Lo mejor del pollo Frito'
    }

]


function Cards() {
   
    return (
        <div className='container col-8' >
            
            <div className='row g-0.5'>
               {
                    cards.map(card =>(
                        <div className="col-md-4" key={card.id}>
                            <Card title={card.title} imageSource={card.image} textSource={card.text}/>
                        </div>
                    ))
               }
                
            </div>
        </div>
        
    )
}

export default Cards