import { useEffect, useState } from 'react';

function App() {
  const [baseUrl, setBaseUrl] = useState('');
  useEffect(() => {
    setBaseUrl(import.meta.env.VITE_BASE_URL);
  });
  return (
    <>
      <h1>Hello World</h1>
      <h2>BASE_URL : {baseUrl}</h2>
    </>
  );
}

export default App;
