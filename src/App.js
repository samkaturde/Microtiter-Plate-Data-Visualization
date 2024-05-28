// src/App.js
import React from 'react';
import DataLoader from './components/DataLoader';
import Heatmap from './components/Heatmap';
import { DataProvider } from './contexts/DataContext';

const App = () => {
  return (
    <DataProvider>
      <div>
        <h1>Microtiter Plate Data Visualization</h1>
        <DataLoader />
        <Heatmap />
      </div>
    </DataProvider>
  );
};

export default App;
