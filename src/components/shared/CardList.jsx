import PropTypes from 'prop-types';

function CardList({ children }) {
  return (
    <div className="list-card-container"> 
      {children}
    </div>
  )
}

CardList.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CardList