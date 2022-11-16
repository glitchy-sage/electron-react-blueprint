import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Import for Sass, I use Sass myself but you are welcome to delete this & use only css or whatever style components you wish
import './sass/main.scss';

// webpack
if (module.hot) module.hot.accept()

const root = createRoot(document.getElementById('app'));

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
