import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx'

import { AuthProvider } from './context/auth-context.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<AuthProvider>
			<Router>
				<App />
			</Router>
		</AuthProvider>
	</StrictMode>,
)
