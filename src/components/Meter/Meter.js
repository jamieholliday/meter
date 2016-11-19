import React, {PropTypes} from 'react';
import Error from '../Error/Error';
import './Meter.css';

const x = 180;
const y = 200;
const radius = 120;
const startAngle = 270;
const endAngle = 90;
const rotate = 45;

const calculateArcCoords = (centerX, centerY, radius, angleInDegrees) => {
  const angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

const renderNeedle = () => {
  return (
    <g className="meter_needle_group" style={{transform: `rotate(${rotate}deg)`}}>
      <path className="meter_needle_bg" d="M55,200 L180,200"></path>
      <path className="meter_needle" d="M60,200 L180,200"></path>
      <circle className="meter_needle_circle" cx="180" cy="200" r="10"></circle>
    </g>
  )
}

const renderArc = () => {
  const start = calculateArcCoords(x, y, radius, endAngle);
  const end = calculateArcCoords(x, y, radius, startAngle);
  return (
    <path className="meter_arc" d={`M ${start.x} ${start.y} A ${radius} ${radius} 0 0 0 ${end.x} ${end.y}`} />
  )
}

const renderSvg = () => {
  return (
    <svg className="meter_svg" viewBox="0 0 360 320">
      <g className="meter_dial">
        {renderArc()}
        {renderNeedle()}
      </g>
    </svg>
  )
}

const renderError = () => {
  return (
    <Error message="Meter content could not be loaded" />
  );
}

const Meter = (props) => {
  const {title, error} = props;
  return (
    <div className="widget">
      {
        title &&
        <header className="meter_title">
          {title}
        </header>
      }
      <div className="meter_content">
        {error ? renderError() : renderSvg()}
      </div>
    </div>
  );
};

Meter.propTypes = {
  title: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  error: PropTypes.bool,
};


export default Meter;
