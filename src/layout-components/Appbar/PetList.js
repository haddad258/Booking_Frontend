import React from 'react'
import PetItem from './PetItem'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
const PetList = (props) => {

  return(
 <> 
   <label htmlFor="search"><SearchIcon /> </label>
   <input type="text" value ={props.inputValue}  onChange={props.petFilterOnChange}/>
     <div className="dog-list">
        {
           props.items.map(item => {
           return <PetItem item={item} key={item.id} handlePetView={props.handlePetView}/>
           })
        }
     </div>
  </>
    )
   }


export default PetList