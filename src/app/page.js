import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";

export default function Home() {
	return (
		//Otehrwise bg-[#121212 ]
		<main className="flex min-h-screen flex-col bg-[#202833] container ">
			<Navbar />
			<div className="container mt-24 mx-auto px-12 py-4">
				<HeroSection />
				<AboutMe />
				<ProjectsSection />
				<EmailSection />
			</div>
		</main>
	);
}
