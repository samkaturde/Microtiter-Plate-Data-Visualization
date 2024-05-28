import React, { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';

const HeatmapContent = ({getColor, selectedMetric}) => {
  const { data } = useContext(DataContext);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(24, 1fr)', gap: '1px' }}>
      {data.map((well, index) => (
        <div
          key={index}
          data-tooltip-id="tooltip"
          data-tooltip-content={Object.entries(well).map(([key, value]) => `${key}: ${value}`)}
          style={{
            backgroundColor: getColor(parseFloat(well[selectedMetric])),
            width: '20px',
            height: '20px',
          }}
        ></div>
      ))}
    </div>
  );
};

export default HeatmapContent;
