import React from "react";

const Footer = () => {
	return (
		<footer className="footer border  border-t-[#33353F] border-l-transparent border-r-transparent text-white">
			<div className="container p-12 flex justify-between">
				<span className="font-mono">
					All rights reserved &copy; {new Date().getFullYear()}
				</span>
				<p className="text-slate-600">
					<a href="https://github.com/acz1992" target="_blank">
						Made by{" "}
						<span className="text-blue-400">
							Adam Zdan-Michajlowicz
						</span>
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;

/* 	<footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
		<div className="container p-12 flex justify-between h-full">
			<small className="duration-200 font-mono">
				All rights reserved &copy; {new Date().getFullYear()}
			</small>

			<small className="hover:text-white">
				<a
					href="https://github.com/acz1992"
					target="_blank"
					rel="noreferrer noopener"
				>
					Made by{" "}
					<span className="text-blue-400">
						Adam Zdan-Michajlowicz
					</span>
				</a>
			</small>
		</div>
	</footer> */
