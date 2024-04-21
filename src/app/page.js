import Image from "next/image";
import HeroSection from "./sections/HeroSection";
import Navbar from "./components/Navigation/Navbar";
import AboutMe from "./sections/AboutMe";
import ProjectsSection from "./sections/ProjectsSection";
import EmailSection from "./sections/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./sections/AchievementsSection";

export default function Home() {
	return (
		//Otherwise bg-[#121212 ]
		<main className="flex min-h-screen flex-col bg-[#202833]">
			<Navbar />
			<div className="container mt-24 mx-auto px-12 py-4">
				<HeroSection />
				<AchievementsSection />
				<AboutMe />
				<ProjectsSection />
				<EmailSection />
			</div>
			<Footer />
		</main>
	);
}
