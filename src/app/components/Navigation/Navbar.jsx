"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
	{
		title: "About",
		path: "#about",
	},
	{
		title: "Projects",
		path: "#projects",
	},
	{
		title: "Contact",
		path: "#contact",
	},
];

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const [showHome, setShowHome] = useState(true);
	const [top, setTop] = useState(true);

	useEffect(() => {
		const scrollHandler = () => {
			const heroSection = document.getElementById("hero-section");
			if (heroSection) {
				const offset = heroSection.getBoundingClientRect().bottom;
				setShowHome(window.pageYOffset > offset);
				setTop(window.pageYOffset > 10);
			}
		};
		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
	}, []);

	return (
		<nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#181818] bg-opacity-100">
			<div className="flex container lg:py-4 lg:px-16 flex-wrap items-center justify-between mx-auto px-4 py-2">
				<Link
					href={"/"}
					className="text-3xl md:text-2xl text-white font-semibold"
					style={{
						opacity: showHome ? 0 : 1,
						transition: "opacity 0.5s ease-in-out",
					}}
				>
					Home
				</Link>
				<div className="mobile-menu md:block md:hidden">
					{!navbarOpen ? (
						<button
							onClick={() => setNavbarOpen(true)}
							className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
						>
							<Bars3Icon className="h-5 w-5" />
						</button>
					) : (
						<button
							onClick={() => setNavbarOpen(false)}
							className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
						>
							<XMarkIcon className="h-5 w-5" />
						</button>
					)}
				</div>
				<div className="menu hidden md:block md:w-auto" id="navbar">
					<ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
						{navLinks.map((link, index) => (
							<li key={index}>
								<NavLink href={link.path} title={link.title} />
							</li>
						))}
					</ul>
				</div>
			</div>
			{navbarOpen ? (
				<MenuOverlay setNavbarOpen={setNavbarOpen} links={navLinks} />
			) : null}
		</nav>
	);
};

export default Navbar;
