import React from 'react'
import './style.css'
const styleCard = {
  width: "18rem",
  margin: "10px",
  color: "white"
}
const styleCard2 = {
  height: "10rem"
}
export const Cards = (props) => {

  return (
    // <div className='card'>
      <div className='card-style' style={styleCard}>
        <div className='img-title'>

          <h3 className='card-title'>{props.title}</h3>
          <img src={props.image} className="card-img" style={styleCard2} alt="Project Image" />
        <div className='card-body '>
          <a href={props.github} className="card-link">Github</a>
          {props.site ? (
            <a href={props.site} className="card-link">Site Link</a>
            ) : null}
        </div>
            </div>
      </div>
    // </div>
  )
}