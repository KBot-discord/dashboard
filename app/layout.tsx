import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import React from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';

import '../public/styles/globals.css';
import '../public/styles/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<div className="drawer">
					<input type="checkbox" className="drawer-toggle" id="drawer" />
					<div className="drawer-content flex flex-col overflow-x-clip">
						<Navbar />
						{children}
						<Footer />
					</div>
					<Sidebar />
				</div>
			</body>
		</html>
	);
}
