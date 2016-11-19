import React, {PropTypes} from 'react';
import './Error.css';

const Error = (props) => {
  const {message} = props;
  return (
    <div>
      <div className="error_message">
        {message}
      </div>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string,
};


export default Error;
