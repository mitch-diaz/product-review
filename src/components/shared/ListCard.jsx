import PropTypes from 'prop-types';

function ListCard({ children }) {
  return (
    <div className="list-card-container"> 
      <div className="card-list">
          {children}
      </div>
    </div>
  )
}

ListCard.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ListCard