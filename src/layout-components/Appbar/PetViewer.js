import React from 'react'
import PetCard from '../../layout-components/Appbar/PetCard'

const PetViewer = (props) => {
  
  return(
     <div>
       <button onClick={props.handlePetGoBack}>Back</button>
       <PetCard item={props.item} 
                handlePetGoBack={props.handlePetGoBack} 
                />
     </div>
     )
   }


export default PetViewer