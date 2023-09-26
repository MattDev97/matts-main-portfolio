import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';

import About from './Components/About/About';
import Experience from './Components/Experience/Experience';

import BackgroundGradientFollow from './Utilities/BackgroundGradientFollow';
import Hero from './Components/Hero/Hero';
import Projects from './Components/Projects/Projects';


function App() {
	document.title = "It's Matt";
	return (
		<div className="font-nunitosans text-white mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-16 lg:py-0">
			<BackgroundGradientFollow />
			<div className="mb-44">
				<Hero></Hero>
			</div>
			<div className="mb-44">
				<About></About>
			</div>
			<div className="mb-44">
				<h1 className="text-3xl font-bold text-center mb-4 md:mb-12">Experience</h1>
				<Experience></Experience>
			</div>
			<div className="mb-44">
				<h1 className="text-3xl font-bold text-center mb-11 md:mb-12">Projects</h1>
				<Projects></Projects>
			</div>
		</div>
		
	);
}

export default App;
