"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
	return (
		<section className="lg-py-16">
			<div className="grid grid-cols-1 sm:grid-cols-12">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
				>
					<h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-800 via-primary-500 to-primary-400">
							Hello, I&apos;m{" "}
						</span>
						<br></br>
						<TypeAnimation
							sequence={[
								"Adam",
								1000,
								"a Fullstack Developer",
								1000,
								"a Tech Connoisseur",
								1000,
							]}
							wrapper="span"
							speed={50}
							repeat={Infinity}
						/>
					</h1>
					<p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
						Creating user-friendly websites and simplifying life
						through tech.
					</p>
					<div>
						<a href="mailto:acz1992@hotmail.co.uk">
							<button
								type="button"
								className="inline-block px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-800 via-primary-500 to-primary-400 hover:bg-slate-200 text-white"
							>
								Hire Me
							</button>
						</a>
						{/* below: bg-gradient-to-br from-primary-800 via-primary-500 to-primary-400 */}
						{/* <button className="inline-block px-1 py-1 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
							<span className="block bg-[#202833] hover:bg-slate-800 rounded-full px-5 py-2">
								Download CV
							</span>
						</button> */}
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-4 place-self-center mt-4 lg:mt-0"
				>
					<div className="bg-[#181818] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
						<Image
							src="/images/my-pic.png"
							alt="Myself"
							className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  rounded-e-full" // rounded-full
							width={300}
							height={300}
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;
