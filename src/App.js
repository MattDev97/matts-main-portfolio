import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';

import About from './Components/About/About';
import Experience from './Components/Experience/Experience';

import BackgroundGradientFollow from './Utilities/BackgroundGradientFollow';
import Hero from './Components/Hero/Hero';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';


function App() {
	document.title = "It's Matt";
	return (
		<div className="">
			<Parallax pages={6} className="font-nunitosans min-h-screen  py-12  md:py-20  lg:py-0">
				<ParallaxLayer speed={1}>
					<div className="max-w-screen-xl text-white mx-auto px-6 md:px-12 lg:px-16">
						<Hero></Hero>
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={1} speed={1}>
					<div className="max-w-screen-xl text-white mx-auto px-6 md:px-12 lg:px-16">
						<About></About>
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={2} speed={1}>
					<div className="mb-44 max-w-screen-xl text-white mx-auto px-6 md:px-12 lg:px-16">
						<h1 className="text-5xl font-bold text-center mb-12">Experience</h1>
						<Experience></Experience>
					</div>
					<div className="mb-44 max-w-screen-xl text-white mx-auto px-6 md:px-12 lg:px-16">
						<h1 className="text-5xl font-bold text-center mb-12">Projects</h1>
						<Projects></Projects>
					</div>
					<div className="max-w-screen-xl text-white mx-auto px-6 md:px-12 lg:px-16">
						<h1 className="text-5xl font-bold text-center mb-12">Contact Me!</h1>
						<Contact></Contact>
					</div>
				</ParallaxLayer>
			</Parallax>
			<BackgroundGradientFollow />
			
			
			
			
			
		</div>
		
	);
}

export default App;
