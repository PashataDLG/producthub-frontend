import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App.jsx';
import { AuthProvider } from './context/auth-context.jsx';
import { ProductProvider } from './context/product-context.jsx';
import { AlertProvider } from './context/alert-context.jsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
	<QueryClientProvider client={queryClient}>
		<Router>
			<AlertProvider>
				<AuthProvider>
					<ProductProvider>
						<App />
					</ProductProvider>
				</AuthProvider>
			</AlertProvider>
		</Router>
	</QueryClientProvider>
);
