import React from 'react'

const PetCard = (props) => {
 
   const {name,imageRef, price, description} = props.item
      
  return(
   <div className="dog-card-container"> 
      <div className="dog-card" onClick={() => props.handlePetGoBack(props.item)}>
          <img className="dog-card-img" src={process.env.PUBLIC_URL+ imageRef.replace("C:\\fakepath\\", "/")} style={{width:150, height:150}} alt={name} title={name}/>
          <h2><b>Name : </b>{name} </h2>
          <p><b>price : </b>{price} </p>
          <p><b>description : </b> {description}</p>
          

        <div className="clear"></div>
     </div> 
     <div>
        
      </div> 
   </div>
    )
   }


export default PetCard