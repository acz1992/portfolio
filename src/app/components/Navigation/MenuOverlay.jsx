import React, { useRef, useEffect } from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, setNavbarOpen }) => {
	const menuRef = useRef(null);

	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setNavbarOpen(false);
			}
		};

		document.addEventListener("mousedown", handleOutsideClick);

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, [setNavbarOpen]);

	return (
		<ul className="flex flex-col py-4 items-center" ref={menuRef}>
			{links.map((link, index) => (
				<li key={index}>
					<NavLink
						href={link.path}
						title={link.title}
						onClick={() => setNavbarOpen(false)}
					/>
				</li>
			))}
		</ul>
	);
};

export default MenuOverlay;
