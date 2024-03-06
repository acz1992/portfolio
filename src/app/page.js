import Image from "next/image";
import HeroSection from "../components/HeroSection";

export default function Home() {
	return (
		//Otehrwise bg-[#121212 ]
		<main className="flex min-h-screen flex-col bg-[#202833] container ">
			<div class="container mx-auto px-12 py-4">
				<HeroSection />
			</div>
		</main>
	);
}
