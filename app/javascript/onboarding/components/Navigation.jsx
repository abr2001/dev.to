import { h } from 'preact';
import PropTypes from 'prop-types';

const Navigation = ({ next, prev, hideNext, hidePrev }) => (
  <div>
    {!hidePrev && (
      <button onClick={prev} className="back-button" type="button">
        BACK
      </button>
    )}
    {!hideNext && (
      <button onClick={next} className="next-button" type="button">
        Continue
      </button>
    )}
  </div>
);

Navigation.propTypes = {
  prev: PropTypes.func.isRequired,
  next: PropTypes.string.isRequired,
  hideNext: PropTypes.bool,
  hidePrev: PropTypes.bool,
};

Navigation.defaultProps = {
  hideNext: false,
  hidePrev: false,
};

export default Navigation;
