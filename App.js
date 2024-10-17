import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Музыка через Яндекс.Музыку</h1>
      <iframe 
        src="https://music.yandex.ru/home?t" 
        width="100%" 
        height="600px" 
        frameborder="0" 
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default App;
