import React from 'react'

 const Card = (props) => {
  return (
    <div>
        <div className="card" style={{width: "18rem"}}>
            <img src={require(`../public/imagenes/${props.imagenes}`)} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className='card-title'>{props.titulo} </h5>
                <p className="card-text">{props.texto}</p>
            </div>
        </div>
    </div>

    
  )
}

export default Card;