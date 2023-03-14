import React from 'react';
import './App.css';
import SearchReasultView from "./pages/SearchReasultView";

function App() {
  return (
    <div className="App" style={{height:"98vh"}}>
      <SearchReasultView fileUrl="/pdfs/ssd.pdf" />
    </div>
  );
}

export default App;
