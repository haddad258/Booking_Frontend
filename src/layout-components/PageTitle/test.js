import React, { Component } from 'react';
import { render } from 'react-dom';
import {RangeStepInput} from 'react-range-step-input';
import './style.css';
import DatePicker from 'react-datepicker';
import RangeSlider from 'react-bootstrap-range-slider';
import { Typography,ListItem, Button, Collapse } from '@material-ui/core';
class Test extends Component {
  constructor() {
    super();

        this.state = {
            value: 50,
            activeCollapse: 'circulars',
            startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        
      }
      onChange(e) {
        const newVal = Number(e.target.value);
        this.setState({value: newVal});
    }
      handleChange(date) {
        this.setState({
          startDate: date
        })
      }
    
      onFormSubmit(e) {
        e.preventDefault();
        console.log(this.state.startDate)
      }
    updateTextInput(val) {
        document.getElementById('textInput').value=val; 
      }

  handleExpandCollaps = (name) => {
    if (this.state.activeCollapse === name) {
      //If collapsiable is already visible and clicked on same then this will hide it
        this.setState({ activeCollapse: '' })
    } else {
        //To show collapsiable
        this.setState({ activeCollapse: name })
    }
  }

  moreInfoClick = (e) => {
    e.stopPropagation();
    console.log("clicked");
  }
  render() {
    return (
      <div>
        <div className="sidebar-nav">
          <div className="sidebar-nav-menu">
          <div className={`sidebar-nav-menu-item ${this.state.activeCollapse === "circulars" ? 'item-active' : ''}`} onClick={() => this.handleExpandCollaps("circulars")} data-id="circulars" >
              <div className="sidebar-nav-menu-item-head">
                <span className="sidebar-nav-menu-item-head-title">price</span>
                <span className="sidebar-nav-menu-item-head-help">
                
                </span>
              </div>
              <div className="sidebar-nav-menu-item-body"> 
  
              <RangeStepInput
                min={0} max={1000}
                value={this.state.value} step={1}
                onChange={this.onChange.bind(this)}
            />
            {this.state.value}
            </div>
            </div>
            <div className={`sidebar-nav-menu-item ${this.state.activeCollapse === "circulars" ? 'item-active' : ''}`} onClick={() => this.handleExpandCollaps("circulars")} data-id="circulars" >
              <div className="sidebar-nav-menu-item-head">
                <span className="sidebar-nav-menu-item-head-title">Brand</span>
                <span className="sidebar-nav-menu-item-head-help">
                
                </span>
              </div>
              <div className="sidebar-nav-menu-item-body"> <ListItem button>Mercedes</ListItem>
            <ListItem button>peugoet</ListItem>
            <ListItem button>BMW</ListItem></div>
            </div>

            <div className={`sidebar-nav-menu-item ${this.state.activeCollapse === "specifications" ? 'item-active' : ''}`} onClick={() => this.handleExpandCollaps("specifications")} data-id="specifications">
              <div className="sidebar-nav-menu-item-head">
                <span className="sidebar-nav-menu-item-head-title">color</span>
                <span className="sidebar-nav-menu-item-head-help">
                  
                </span>
              </div>
              <div className="sidebar-nav-menu-item-body"><ListItem button>blue</ListItem>
            <ListItem button>gray</ListItem>
            <ListItem button>red</ListItem></div>
            </div>


            <div className={`sidebar-nav-menu-item ${this.state.activeCollapse === "wo" ? 'item-active' : ''}`} onClick={() => this.handleExpandCollaps("wo")} data-id="wo">
              <div className="sidebar-nav-menu-item-head">
                <span className="sidebar-nav-menu-item-head-title">View  Availability</span>
                <span className="sidebar-nav-menu-item-head-help">
                 
                </span>
              </div>
              <div className="sidebar-nav-menu-item-body"><label htmlFor="date">Start Date</label>
          
          <input
          type="date"
          id="dateDebut"
          selected={ this.state.startDate }
          onChange={ this.handleChange }
             />
         <label htmlFor="date">End Date:</label>
        <input
          type="date"
          id="dateFin"
          selected={ this.state.startDate }
          onChange={ this.handleChange }
          
         /> </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Test