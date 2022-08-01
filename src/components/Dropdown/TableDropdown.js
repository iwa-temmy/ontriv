import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { AiOutlineMore } from "react-icons/ai";

const TableDropdown = ({ toggleInvoicePreview, openFullInvoicePage }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} size="md">
      <DropdownToggle>
        <AiOutlineMore color="#000" size="20px" />
      </DropdownToggle>
      <DropdownMenu left="true">
        <DropdownItem onClick={toggleInvoicePreview}>Preview</DropdownItem>
        <DropdownItem onClick={openFullInvoicePage}>View Full Invoice</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default TableDropdown;
