import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './sass/main.scss';
import App from './app/App';

const root = createRoot(document.getElementById('app'));

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
