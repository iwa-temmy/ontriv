/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

import {
  Pagination,
  PaginationItem,
  PaginationLink,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";

const DataTablePagination = ({
  page,
  pages,
  canPrevious,
  canNext,
  pageSizeOptions,
  showPageSizeOptions,
  showPageJump,
  defaultPageSize,
  onPageChange,
  onPageSizeChange,
  paginationMaxSize,
  position,
}) => {
  const [pageState, setPageState] = useState(page);
  const [pageSize, setPageSize] = useState(defaultPageSize);

  useEffect(() => {
    setPageState(page);
  }, [page]);
  const getSafePage = (_page) => {
    let p = _page;
    if (Number.isNaN(_page)) {
      p = page;
    }
    return Math.min(Math.max(p, 0), pages - 1);
  };

  const changePageSize = (size) => {
    onPageSizeChange(size);
    setPageSize(size);
  };

  const changePage = (_page) => {
    const p = getSafePage(_page);

    if (p !== pageState) {
      setPageState(p);
      onPageChange(p);
    }
  };

  const pageClick = (pageIndex) => {
    changePage(pageIndex);
  };

  const renderPages = () => {
    const totalPages = pages;
    let endPage = pages;
    const currentPage = pageState;
    let startPage = 0;
    const maxSize = 4;

    if (maxSize) {
      if (endPage > maxSize) {
        startPage = Math.max(currentPage + 1 - Math.floor(maxSize / 2), 1);
        endPage = startPage + maxSize - 1;
        if (endPage > totalPages) {
          endPage = totalPages;
          startPage = endPage - maxSize + 1;
        }
        startPage -= 1;
      }
    }

    const pageButtons = [];
    for (let i = startPage; i < endPage; i += 1) {
      const active = currentPage === i;
      pageButtons.push(
        <PaginationItem key={i} active={active}>
          <PaginationLink onClick={() => pageClick(i)}>{i + 1}</PaginationLink>
        </PaginationItem>
      );
    }
    return pageButtons;
  };

  const renderPageJump = () => {
    const pageNumbers = [];
    for (let i = 0; i < pages; i += 1) {
      pageNumbers.push(
        <DropdownItem key={i} onClick={() => changePage(i)}>
          {i + 1}
        </DropdownItem>
      );
    }
    return pageNumbers;
  };

  return (
    <>
      <div
        className={`text-${position}`}
        // style={{
        //   marginTop: "-1.5rem",
        //   marginLeft: "-0.8rem",
        //   position: "absolute",
        //   bottom: "0px",
        // }}
      >
        {showPageJump && (
          <div className="float-left pt-2">
            <span>Page </span>
            <UncontrolledDropdown className="d-inline-block">
              <DropdownToggle caret color="outline-primary" size="xs">
                {pageState + 1}
              </DropdownToggle>
              <DropdownMenu direction="left">{renderPageJump()}</DropdownMenu>
            </UncontrolledDropdown>
            <span> of </span>
            {pages}
          </div>
        )}

        <Pagination
          className="d-inline-block"
          size="md"
          listClassName="justify-content-center"
          aria-label="Page navigation example"
        >
          <PaginationItem className={`${!canPrevious && "disabled"}`}>
            <PaginationLink
              className="prev"
              onClick={() => {
                if (!canPrevious) return;
                changePage(page - 1);
              }}
              disabled={!canPrevious}
            >
              <MdOutlineKeyboardArrowLeft color="#2062F4" size="20px" />
            </PaginationLink>
          </PaginationItem>

          {renderPages()}
          <PaginationItem className={`${!canNext && "disabled"} mb-0`}>
            <PaginationLink
              className="next mb-0"
              onClick={() => {
                if (!canNext) return;
                changePage(page + 1);
              }}
              disabled={!canNext}
            >
              <MdOutlineKeyboardArrowRight color="#6D3CC8" size="20px" />
            </PaginationLink>
          </PaginationItem>
        </Pagination>
        {showPageSizeOptions && (
          <div className="float-right pt-2">
            <span className="text-muted text-small mr-1">Items </span>
            <UncontrolledDropdown className="d-inline-block">
              <DropdownToggle caret color="outline-primary" size="xs">
                {pageSize}
              </DropdownToggle>
              <DropdownMenu right>
                {pageSizeOptions.map((size, index) => {
                  return (
                    <DropdownItem
                      key={index}
                      onClick={() => changePageSize(size)}
                    >
                      {size}
                    </DropdownItem>
                  );
                })}
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        )}
      </div>
    </>
  );
};

export default DataTablePagination;
