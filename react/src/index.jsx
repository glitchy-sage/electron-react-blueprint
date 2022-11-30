import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// webpack
if (module.hot) module.hot.accept()

const root = createRoot(document.getElementById('app'));

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
