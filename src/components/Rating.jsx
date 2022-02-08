import PropTypes from 'prop-types';

function Rating({ children }) {
  let stars;

  if (Math.ceil(children) === 0) {
    stars = '☆☆☆☆☆';
  } else if (Math.ceil(children) === 1) {
    stars = '★☆☆☆☆';
  } else if (Math.ceil(children) === 2) {
    stars = '★★☆☆☆';
  } else if (Math.ceil(children) === 3) {
    stars = '★★★☆☆';
  } else if (Math.ceil(children) === 4) {
    stars = '★★★★☆';
  } else if (Math.ceil(children) === 5) {
    stars = '★★★★★';
  }

  return (
    <div className="stars">
      <nav>{stars}</nav>
    </div>
  );
}

Rating.propTypes = {
  children: PropTypes.string,
};

export default Rating;
