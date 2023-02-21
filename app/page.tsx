import Head from 'next/head';
import {baseMetadata} from "../lib/util/baseMetadata";

const HomePage = () => {
	return (
		<>
			<Head>
				<title>Home - KBot</title>
			</Head>
			<div className="from-[#1E3A8A] to-[#F0B598] text-primary-content grid bg-gradient-to-br">
				<div className="col-start-1 row-start-1 relative h-[90vh] grid items-end">
					<svg
						className="fill-[#F0B598] absolute h-auto w-full"
						width="1800"
						height="500"
						viewBox="0 0 1600 500"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M 0 338 L 1800 0 V 595 H 0 V 338 Z"></path>
					</svg>
					<svg
						className="fill-primary absolute h-auto w-full"
						width="1600"
						height="400"
						viewBox="0 0 1600 400"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M 0 0 L 1600 895 V 895 H 0 Z"></path>
					</svg>
					<svg
						className="fill-base-100 absolute h-auto w-full"
						width="1800"
						height="400"
						viewBox="0 0 1600 400"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M 0 338 L 1800 0 V 595 H 0 V 338 Z"></path>
					</svg>
					<svg
						className="fill-base-100 absolute h-auto w-full"
						width="1600"
						height="300"
						viewBox="0 0 1600 300"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M 0 0 L 1600 895 V 895 H 0 Z"></path>
					</svg>
				</div>
				<div className="hero-content col-start-1 row-start-1 mx-auto h-min mt-48 lg:mt-32">
					<div>
						<div className="mb-2 py-4 text-center lg:py-10">
							<h1 className="font-title mb-2 text-4xl font-extrabold sm:text-5xl lg:text-7xl">
								KBot Dashboard
							</h1>
							<h2 className="font-title text-2xl font-extrabold sm:text-3xl lg:text-4xl">
								(Under construction)
							</h2>
						</div>
						<div className="flex flex-1 justify-center px-16 mt-4 sm:px-24 lg:mt-6 lg:justify-start lg:px-32">
							<div className="btn cursor-not-allowed no-animation w-full rounded-full normal-case sm:text-lg">
								Go to Dashboard
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export const metadata = baseMetadata({
	title: 'Home | KBot'
});

export default HomePage;
