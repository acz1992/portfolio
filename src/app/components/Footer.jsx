import React from "react";

const Footer = () => {
	return (
		<footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
			<div className="container p-12 flex justify-between">
				<span className="font-mono">
					All rights reserved &copy; {new Date().getFullYear()}
				</span>
				<p className="text-slate-600">
					<a href="https://github.com/acz1992" target="_blank">
						Made by{" "}
						<span className="text-primary-400">
							Adam Zdan-Michajlowicz
						</span>
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
