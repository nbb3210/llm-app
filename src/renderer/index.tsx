import React from 'react';
import ReactDOM from 'react-dom/client';

// 主组件
const App: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Hello, Electron + React + Vite!123</h1>
      <p>This is a basic example of a React app running in Electron.</p>
    </div>
  );
};

// 渲染到 HTML
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}