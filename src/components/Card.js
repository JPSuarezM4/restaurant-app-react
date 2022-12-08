import React from 'react'
import PropTypes from "prop-types";
import {  } from "./cards.css";

function Card({title, imageSource, textSource}) {
  return (
            <div className='card text-center ' style={{width: '20rem'}}>
                
                <div className="overflow ">
                    <img src={imageSource} alt="" className='card-img-top' />
                </div>

                <div className="card-body">
                    <h4 className='card-tittle'>{title}</h4>
                    <p className='card-text text-secondary'>{textSource}</p>
                    <a href="#!" className='btn btn-outline-secondary'>
                        ir al sitio
                    </a>
                </div>
            </div>
  )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    imageSource: PropTypes.string
}

export default Card