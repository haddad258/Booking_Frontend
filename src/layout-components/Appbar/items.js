import React, { Component } from 'react'
import PetList from '../../layout-components/Appbar/PetList'
import PetViewer from '../../layout-components/Appbar/PetViewer'
import axios from "axios";
class PetContainer extends Component {

 state = {
   items: [],
   item: {},
   isPetViewOn: false,
   sortValue: '',
   inputValue: '',
 }
 
 componentDidMount(){
    axios.get('http://localhost:3002/forResrvation/listDispo/all')

   .then(response => {
    //  console.log(petsData)
    this.setState({
      items: response.data.content
    })
   })
 }

 petFilterOnChange = (event) => {
   console.log("hi from onChange", event.target.value)
   this.setState({
     inputValue: event.target.value
   })

 }

 handleSortPets = (event) => {
  //  console.log("sort button", this.state.sortValue)
   this.setState({
     sortValue: event.target.value
   })
 }

 sortPets = (items) => {
   if(this.state.sortValue === "Name") {
     return [...items].sort((a,b) => {
       if(a.name > b.name) {
         return 1
       }else if (a.name < b.name) {
         return -1
       }else {
         return 0
       }
     })
   }
   
  else {
    return items
  }

 }

 handlePetView= (petItem) => {
  //  console.log("click", petItem)
   this.setState({
     item: petItem,
     isPetViewOn: !this.state.isPetViewOn
   })
 }

 handlePetGoBack = ()=>{
  this.setState({
    item: {},
    isPetViewOn: false
  })
 }





 render() {

  const filteredPets = 
    this.state.items.filter(item => {
      return item.name.toLowerCase().includes(this.state.inputValue.toLowerCase())
    }) 
  

  return(
   <div className="pet-container">
  
      <label>Sort by</label>
      
      <select name="sortValue" onChange={this.handleSortPets}>
        <option value="All">All</option>
        <option value="Name">Name</option>
        
      </select>
 
       {
        
         <PetList items={this.sortPets(filteredPets)} 
                  handlePetView={this.handlePetView}
                  petFilterOnChange={this.petFilterOnChange}
                  inputValue={this.state.inputValue} /> 
       }  
   </div>
    )
   }
 }

export default PetContainer