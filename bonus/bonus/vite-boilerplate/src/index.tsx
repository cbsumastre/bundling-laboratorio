import { createRoot } from 'react-dom/client'
import { WelcomeMessage } from "./welcome-message"

const root = createRoot(document.getElementById("root") as Element);

root.render(
    <WelcomeMessage />
);