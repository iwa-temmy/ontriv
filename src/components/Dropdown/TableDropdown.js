import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { AiOutlineMore } from "react-icons/ai";

const TableDropdown = ({
  toggleInvoicePreview,
  openFullInvoicePage,
  openDeleteModal,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} size="sm">
      <DropdownToggle>
        <AiOutlineMore color="#000" size="20px" />
      </DropdownToggle>
      <DropdownMenu left="true" className="dropdown-container">
        <DropdownItem className="dropdown-items" onClick={toggleInvoicePreview}>
          Preview
        </DropdownItem>
        <DropdownItem className="dropdown-items" onClick={openFullInvoicePage}>
          View Full Invoice
        </DropdownItem>
        <DropdownItem className="dropdown-items" onClick={openDeleteModal}>
          Delete
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default TableDropdown;
