import { createRoot } from 'react-dom/client'
import { App } from './app';

import "./css/styles.scss";

const root = createRoot(document.getElementById("root") as Element);

root.render(<App />);