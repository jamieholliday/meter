import React, {PropTypes} from 'react';
import Error from '../Error/Error';
import './Meter.css';

const startAngle = 270;
const endAngle = 90;

const calculateArcCoords = (centerX, centerY, radius, angleInDegrees) => {
  const angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

const calculateRotation = (min, max, value) => {
  let rotation = 0;
  if (value > max) {
    rotation = 180
  } else if(value <= max && value >= min) {
    rotation = ((value - min) / (max - min)) * 180
  }
  return rotation;
}

const getSymbol = (unit) => {
  // this is a naive approach. This should be delegated to a library. But but work for this use case
  switch (unit) {
    case 'USD':
      return '$';
    case 'GBP':
      return '£';
    case 'EUR':
      return '€'
    case 'CHF':
      return 'CHF'
    default:
      return '';
  }
}

const renderUnit = (val, unit, type) => {
  if (unit) {
    let symbol = unit;
    // convert the type only if its a currency
    if (type === 'currency') {
      symbol = getSymbol(unit);
    }
    return (
      <tspan className="meter_text_unit">{symbol}</tspan>
    )
  }
}

const renderMin = (val, unit, type) => {
  if (val) {
    return (
      <text className="meter_min" x={34} y={280}>
        {renderUnit(val, unit, type)}
        <tspan className="meter_text_val">{val}</tspan>
      </text>
    )
  }
}

const renderMax = (val, unit, type) => {
  if (val) {
    return (
      <text className="meter_max" x={277} y={280}>
        {renderUnit(val, unit, type)}
        <tspan className="meter_text_val">{val}</tspan>
      </text>
    )
  }
}

const renderValue = (val, unit, type) => {
  if (val) {
    return (
      <text className="meter_value" x={140} y={100}>
        {renderUnit(val, unit, type)}
        <tspan className="meter_text_val">{val}</tspan>
      </text>
    )
  }
}

const renderNeedle = (min, max, value) => {
  const rotation = calculateRotation(min, max, value);
  return (
    <g className="meter_needle_group" style={{transform: `rotate(${rotation}deg)`}}>
    <path className="meter_needle_bg" d="M55,250 L180,250"></path>
    <path className="meter_needle" d="M60,250 L180,250"></path>
    <circle className="meter_needle_circle" cx="180" cy="250" r="10"></circle>
    </g>
  )
}

const renderArc = () => {
  const x = 180;
  const y = 250;
  const radius = 120;
  const start = calculateArcCoords(x, y, radius, endAngle);
  const end = calculateArcCoords(x, y, radius, startAngle);
  return (
    <path className="meter_arc" d={`M ${start.x} ${start.y} A ${radius} ${radius} 0 0 0 ${end.x} ${end.y}`} />
  )
}

const renderSvg = (props) => {
  const {min, max, value, unit, type} = props;
  if (min && max && value) {
    return (
      <svg className="meter_svg" viewBox="0 0 360 320">
      {renderValue(value, unit, type)}
      <g className="meter_dial">
      {renderArc()}
      {renderNeedle(min, max, value)}
      {renderMin(min, unit, type)}
      {renderMax(max, unit, type)}
      </g>
      </svg>
    )
  }
}

const renderError = () => {
  return (
    <Error message="Meter content could not be loaded" />
  );
}

const Meter = (props) => {
  const {title, error, loading} = props;
  return (
    <div className="widget">
      <header className="meter_title">
        <div className="meter_title_text">
          {title}
        </div>
        {
          loading && (
            <div className="meter_loader">
              <div className="meter_loader_spinner" />
            </div>
          )
        }
      </header>
      <div className="meter_content">
        {error ? renderError() : renderSvg(props)}
      </div>
    </div>
  );
};

Meter.propTypes = {
  title: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  unit: PropTypes.string,
  type: PropTypes.oneOf(['currency']),
  error: PropTypes.bool,
  loading: PropTypes.bool,
};


export default Meter;
