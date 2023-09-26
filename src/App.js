import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';

import About from './About/About';
import Experience from './Experience/Experience';

import CursorSpotlight from './Extra/CursorSpotlight';
import BackgroundGradientFollow from './Utilities/BackgroundGradientFollow';


function App() {
	return (
		<div  className="text-white mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-16 lg:py-0">
			<BackgroundGradientFollow />
			<div className="min-h-screen lg:flex lg:justify-between lg:gap-4 container mx-auto">
				{/* Left Column */}
				<header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
					<div>
						<h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
							<a href="/">Matthew Muenzberg</a>
							</h1>
						<h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
							Senior Technical Consultant at Avionos, A Salesforce Company
						</h2>
						<p className="mt-4 max-w-xs leading-normal font-light">
							I build accessible, inclusive products and digital experiences for the web.
						</p>
					</div>
				</header>

				{/* Right Column */}
				<main className="lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:py-24">
					<section className="mb-24">
						<About></About>
					</section>
					<section className="mb-24">
						<Experience></Experience>
					</section>
				</main>
			</div>
		</div>
		
	);
}

export default App;
