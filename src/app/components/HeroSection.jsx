"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
	return (
		<section>
			<div className="grid grid-cols-1 sm:grid-cols-12">
				<div className="col-span-7 place-self-center text-center sm:text-left">
					<h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-500 to-blue-400">
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
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisq voluptatum.
					</p>
					<div>
						<button className="inline-block px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-800 via-blue-500 to-blue-400 hover:bg-slate-200 text-white">
							Hire Me
						</button>
						{/* below: bg-gradient-to-br from-blue-800 via-blue-500 to-blue-400 */}
						<button className="inline-block px-1 py-1 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
							<span className="block bg-[#202833] hover:bg-slate-800 rounded-full px-5 py-2">
								Download CV
							</span>
						</button>
					</div>
				</div>
				<div className="col-span-5 place-self-center mt-4 lg:mt-0">
					<div className="bg-[#181818] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
						<Image
							src="/images/my-pic.png"
							alt="Myself"
							className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  rounded-e-full" // rounded-full
							width={300}
							height={300}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
