import React from 'react';
import './App.css';
import SearchReasultView from "./pages/SearchReasultView";

function App() {
  return (
    <div className="App" style={{height:"100vh", overflow:'hidden'}}>
      <SearchReasultView fileUrl="/pdfs/john.pdf" />
    </div>
  );
}

export default App;
