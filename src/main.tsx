import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Product from './pages/product/Product.tsx';
import Layout from './components/ui/layout/Layout.tsx';
import App from './App.tsx';
import Category from './pages/category/Category.tsx';
import Order from './pages/order/Order.tsx';

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <App />,
			},
			{
				path: '/product',
				element: <Product />,
			},
			{
				path: '/category',
				element: <Category />,
			},
			{
				path: '/order',
				element: <Order />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
