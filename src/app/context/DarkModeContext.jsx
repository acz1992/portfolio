import React, {
	createContext,
	useContext,
	useEffect,
	useState,
	ReactNode,
} from "react";

export const DarkModeContext =
	(createContext < DarkModeContextType) | (undefined > undefined);

export const DarkModeProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] =
		useState <
		boolean >
		(() => {
			const storedPreference = localStorage.getItem("theme");
			return storedPreference === "dark";
		});

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [isDarkMode]);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
};

export const useDarkMode = () => {
	const context = useContext(DarkModeContext);
	if (context === undefined) {
		throw new Error("useDarkMode must be used within a DarkModeProvider");
	}
	return context;
};
