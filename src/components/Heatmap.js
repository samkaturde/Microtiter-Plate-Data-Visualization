import React, { useContext, useState, useEffect, useMemo } from 'react';
import { Tooltip } from 'react-tooltip';
import { DataContext } from '../contexts/DataContext';
import HeatmapContent from "../components/HeatmapContent";

const Heatmap = () => {
  const { data } = useContext(DataContext);
  const [selectedMetric, setSelectedMetric] = useState(Object.keys(data[0] || {})[1]);

  useEffect(() => {
    setSelectedMetric(Object.keys(data[0] || {})[1]);
  }, [data])

  const handleMetricChange = (event) => {
    const inputSelection = event.target.value
    setSelectedMetric(inputSelection);
  };

  const getColor = (value) => {
    const initialVal = (1 - value) * 240;
    return `hsl(${initialVal}, 100%, 50%)`;
  };

  const DropdownElement = ({ data }) => {
    const selectElement = useMemo(() => {
      return (
        <select style={{ marginBottom: '20px'}} className='dropdown' value={selectedMetric} onChange={handleMetricChange}>
          {Object.keys(data[0] || {}).slice(1).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      )
    }, [data]);
    return selectElement
  };

  return (
    <div>
      {data.length > 0 && (
        <>
          <h2>Heatmap</h2>
          <label>
            Select Metric:
            <DropdownElement data={data} />
          </label>
          <HeatmapContent 
            getColor={getColor} 
            selectedMetric={selectedMetric} 
          />
          <Tooltip 
            id="tooltip" 
            place="top" 
            effect="solid" 
            className='tooltip'
            multiline={true}
          />
        </>
      )}
    </div>
  );
};

export default Heatmap;
