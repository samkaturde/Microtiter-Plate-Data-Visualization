import React, { useContext } from 'react';
import Papa from 'papaparse';
import { DataContext } from '../contexts/DataContext';

const DataLoader = () => {
  const { setData } = useContext(DataContext);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          setData(results.data);
        },
      });
    }
  };

  return (
    <div>
      <h2>Upload CSV File : </h2>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
    </div>
  );
};

export default DataLoader;
