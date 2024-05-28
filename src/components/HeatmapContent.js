import React, { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';

const HeatmapContent = ({getColor, selectedMetric}) => {
  const { data } = useContext(DataContext);

  const tooltipContent = (key, value) => {
    return (
      `<div>
        <p><strong>${key || 'Colomn'} : ${value}</strong></p>
      </div>`
    );
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(24, 1fr)', gap: '1px' }}>
      {data.map((colData, index) => (
        <div
          key={index.toString()}
          data-tooltip-id="tooltip"
          data-tooltip-html={
            Object.entries(colData).map(([key, value]) => tooltipContent(key, value) ).join('')
          }
          style={{
            backgroundColor: getColor(parseFloat(colData[selectedMetric])),
            width: '20px',
            height: '20px',
            margin: '05px',
          }}
        ></div>
      ))}
    </div>
  );
};

export default HeatmapContent;
