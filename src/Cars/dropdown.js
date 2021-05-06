import React from "react";
import { Dropdown as BootstrapDropdown } from "react-bootstrap";
import PropTypes from "prop-types";


const Dropdown = ({ items }) => {
  return (
    <BootstrapDropdown className="sort-dropdown">
      <BootstrapDropdown.Toggle
        className="sort-dropdown-toggle"
        variant="success"
        id="dropdown"
      >
        <span className="toggle-text">Selection</span>
      </BootstrapDropdown.Toggle>

      <BootstrapDropdown.Menu className="sort-dropdown-menu">
        {items.map((name, index) => (
          <BootstrapDropdown.Item
            className="sort-dropdown-item"
            key={index}
            href={`#/action-${index}`}
          >
            {name}
          </BootstrapDropdown.Item>
        ))}
      </BootstrapDropdown.Menu>
    </BootstrapDropdown>
  );
};

Dropdown.propTypes = {
  items: PropTypes.array,
};

Dropdown.defaultProps = {
  items: [],
};

export default Dropdown;