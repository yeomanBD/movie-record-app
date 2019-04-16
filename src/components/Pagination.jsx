import React, { Component } from "react";

// total item :
// page count array :
// page number : total items / page size

class Pagination extends Component {
  state = {
    selectedPage: 1
  };
  handleSelectedPage = page => {
    this.setState({ selectedPage: page });
  };
  getPageArray = (totalItems, pageSize) => {
    let totalPages = totalItems / pageSize;
    totalPages = totalItems % pageSize ? totalPages + 1 : totalPages;
    let pageArray = [],
      index = 1;
    while (index <= totalPages) {
      pageArray.push(index);
      index += 1;
    }
    return pageArray;
  };
  render() {
    const { totalItems, pageSize } = this.props;
    return (
      <nav>
        <ul className="pagination">
          {this.getPageArray(totalItems, pageSize).map(page => (
            <li
              onClick={() => {
                this.handleSelectedPage(page);
              }}
              className={
                this.state.selectedPage === page
                  ? "page-item active"
                  : "page-item"
              }
            >
              <a className="page-link">{page}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
