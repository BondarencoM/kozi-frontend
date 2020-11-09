import React from 'react';
import '../../fonts/OpenSans-Regular.ttf';
import './sensor.css';

export default function Sensor({
  floor,
  loc_x,
  loc_y,
  cellHeight = 100 / 32,
  cellWidth = 100 / 14,
  temperature = 0.0,
}) {
  return (
    <>
      <div
        className='sensor-font sensor'
        style={{
          position: 'absolute',
          left: (loc_x - 1.25) * cellWidth + '%',
          top: (loc_y - 1.25) * cellHeight + '%',
        }}
      >
        <span>{temperature.toFixed(1) + '°C'}</span>
      </div>
    </>
  );
}
