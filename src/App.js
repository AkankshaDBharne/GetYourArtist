import React, { useState, useEffect } from 'react';
import Body from './Components/Body/Body';
import Shimmer from './Components/Shimmer/Shimmer'; 

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? <Shimmer /> : <Body />}
    </div>
  );
}

export default App;
