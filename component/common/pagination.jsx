import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Pagination = props => {
  const { item, pageSize, onPageChange, currentPage } = props;
  console.log(currentPage);
  const pagesCount =  Math.ceil(item / pageSize);
  if(pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  return (
    <nav>
      <ul className='pagination'>
        {pages.map(page => (
          <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
            <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  item : PropTypes.number.isRequired,
  pageSize : PropTypes.number.isRequired,
  currentPage : PropTypes.number.isRequired,
  onPageChange : PropTypes.func.isRequired

}

export default Pagination;