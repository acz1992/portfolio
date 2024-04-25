"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import textConent from "../../data/textContent.json";

const HeroSection = () => {
	const { subHeader } = textConent;
	return (
		<section id="hero-section" className="lg:py-16 flex justify-center">
			<div className="flex flex-col md:flex-row max-w-6xl  xl:gap-20">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="text-center sm:text-left "
				>
					<div className="h-8 mb-24 md:mb-32 ">
						<h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-5xl lg:leading-normal font-extrabold ">
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
									"a Tech Enthusiast",
									1000,
								]}
								wrapper="span"
								speed={50}
								repeat={Infinity}
							/>
						</h1>
					</div>
					<p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-lg">
						{subHeader}
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
					className="mt-4 lg:mt-0 flex m-auto"
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
