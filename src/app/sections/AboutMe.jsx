"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "../components/TabButton";
import SkillsTab from "../components/SkillsTab";

const TAB_DATA = [
	{
		title: "Skills",
		id: "skills",
		/* 	content: (
			<ul className="list-disc pl-2">
				<li>HTML5</li>
				<li>CSS3</li>
				<li>JavaScript</li>
				<li>TypeScript</li>
				<li>React</li>
				<li>Next.js</li>
				<li>Node.js</li>
				<li>Express.js</li>
				<li>Prisma</li>
				<li>Mongoose</li>
				<li>MongoDB</li>
				<li>JSON</li>
				<li>Figma</li>
			</ul>
		), */
	},
	{
		title: "Education",
		id: "education",
		content: (
			<ul className="font-semibold text-1xllist-disc list-none pl-2 flex flex-col gap-3">
				<div className="flex items-center gap-3 ">
					<Image
						src="/images/lancasteruniversity.jpeg"
						alt="Lancaster Unviversity"
						width={63}
						height={100}
					/>
					<li className>Lancaster University</li>
				</div>

				<div className="flex items-center gap-3">
					<svg
						class="h-16 w-16 text-white"
						viewBox="0 0 250 250"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect
							x="7.5"
							y="7.5"
							width="235"
							height="235"
							stroke="currentColor"
							stroke-width="5"
						></rect>
						<path
							d="M24.4 145V116.6H34.24C37.28 116.6 39.8133 117.24 41.84 118.52C43.8933 119.773 45.4267 121.48 46.44 123.64C47.4533 125.773 47.96 128.147 47.96 130.76C47.96 133.64 47.4 136.147 46.28 138.28C45.16 140.413 43.5733 142.067 41.52 143.24C39.4667 144.413 37.04 145 34.24 145H24.4ZM44.32 130.76C44.32 128.627 43.92 126.733 43.12 125.08C42.3467 123.427 41.2133 122.133 39.72 121.2C38.2267 120.267 36.4 119.8 34.24 119.8H28V141.8H34.24C36.4267 141.8 38.2667 141.32 39.76 140.36C41.2533 139.373 42.3867 138.053 43.16 136.4C43.9333 134.72 44.32 132.84 44.32 130.76ZM72.3128 141.8V145H53.0328V116.6H71.9528V119.8H56.6328V129H69.9528V132H56.6328V141.8H72.3128ZM78.0516 116.6L87.4516 140.48L96.8116 116.6H100.612L89.0916 145H85.8116L74.2516 116.6H78.0516ZM47.24 157.6V186H43.64V173.08H28V186H24.4V157.6H28V169.88H43.64V157.6H47.24ZM62.6884 157.6H65.7284L77.3284 186H73.4884L70.1284 177.68H58.2084L54.8884 186H51.0484L62.6884 157.6ZM69.3284 174.88L64.2084 161.76L58.9284 174.88H69.3284ZM91.6669 186.2C89.4002 186.2 87.4935 185.813 85.9469 185.04C84.4002 184.24 83.1602 183.173 82.2269 181.84C81.2935 180.48 80.6135 178.947 80.1869 177.24C79.7602 175.533 79.5469 173.773 79.5469 171.96V157.6H83.1469V171.96C83.1469 173.347 83.2802 174.707 83.5469 176.04C83.8402 177.347 84.3069 178.52 84.9469 179.56C85.5869 180.6 86.4535 181.427 87.5469 182.04C88.6402 182.653 90.0002 182.96 91.6269 182.96C93.2802 182.96 94.6535 182.653 95.7469 182.04C96.8402 181.4 97.7069 180.56 98.3469 179.52C98.9869 178.453 99.4402 177.267 99.7069 175.96C100 174.653 100.147 173.32 100.147 171.96V157.6H103.747V171.96C103.747 173.88 103.52 175.707 103.067 177.44C102.64 179.147 101.947 180.653 100.987 181.96C100.027 183.267 98.7735 184.307 97.2269 185.08C95.7069 185.827 93.8535 186.2 91.6669 186.2ZM126.822 163.56C126.156 162.813 125.129 162.133 123.742 161.52C122.356 160.907 120.809 160.6 119.102 160.6C116.916 160.6 115.302 161.013 114.262 161.84C113.222 162.667 112.702 163.8 112.702 165.24C112.702 166.253 112.969 167.053 113.502 167.64C114.036 168.227 114.849 168.707 115.942 169.08C117.062 169.453 118.476 169.84 120.182 170.24C122.156 170.667 123.862 171.187 125.302 171.8C126.742 172.413 127.849 173.24 128.622 174.28C129.396 175.293 129.782 176.653 129.782 178.36C129.782 180.173 129.329 181.667 128.422 182.84C127.516 184.013 126.276 184.88 124.702 185.44C123.156 186 121.409 186.28 119.462 186.28C115.036 186.28 111.182 184.947 107.902 182.28L109.622 179.24C110.209 179.827 110.996 180.413 111.982 181C112.996 181.587 114.142 182.08 115.422 182.48C116.729 182.853 118.102 183.04 119.542 183.04C121.569 183.04 123.142 182.68 124.262 181.96C125.382 181.213 125.942 180.133 125.942 178.72C125.942 177.653 125.622 176.8 124.982 176.16C124.369 175.52 123.449 174.987 122.222 174.56C120.996 174.133 119.502 173.707 117.742 173.28C115.822 172.8 114.209 172.28 112.902 171.72C111.596 171.133 110.609 170.373 109.942 169.44C109.302 168.507 108.982 167.293 108.982 165.8C108.982 163.987 109.422 162.453 110.302 161.2C111.182 159.947 112.396 159 113.942 158.36C115.489 157.72 117.236 157.4 119.182 157.4C121.076 157.4 122.796 157.693 124.342 158.28C125.916 158.867 127.302 159.653 128.502 160.64L126.822 163.56ZM24.4 227V198.6H28V223.8H43.84V227H24.4ZM67.0394 223.8V227H47.7594V198.6H66.6794V201.8H51.3594V211H64.6794V214H51.3594V223.8H67.0394ZM71.9781 227V198.6H75.5781V227H71.9781ZM82.3688 227V198.6H94.2088C95.4621 198.6 96.6088 198.867 97.6488 199.4C98.6888 199.907 99.5954 200.6 100.369 201.48C101.142 202.333 101.742 203.307 102.169 204.4C102.595 205.467 102.809 206.56 102.809 207.68C102.809 209.227 102.462 210.707 101.769 212.12C101.075 213.507 100.102 214.64 98.8488 215.52C97.5954 216.373 96.1288 216.8 94.4488 216.8H85.9688V227H82.3688ZM85.9688 213.6H94.2488C95.2354 213.6 96.0888 213.333 96.8088 212.8C97.5554 212.267 98.1288 211.547 98.5288 210.64C98.9554 209.733 99.1687 208.747 99.1687 207.68C99.1687 206.56 98.9288 205.56 98.4488 204.68C97.9688 203.773 97.3421 203.067 96.5688 202.56C95.7954 202.053 94.9421 201.8 94.0088 201.8H85.9688V213.6ZM105.171 224.2L123.491 201.8H105.531V198.6H127.691V201.4L109.691 223.8H127.691V227H105.171V224.2ZM132.525 227V198.6H136.125V227H132.525ZM154.316 227.2C152.449 227.2 150.702 226.8 149.076 226C147.476 225.173 146.076 224.08 144.876 222.72C143.676 221.333 142.742 219.787 142.076 218.08C141.409 216.347 141.076 214.56 141.076 212.72C141.076 210.8 141.409 208.987 142.076 207.28C142.742 205.547 143.662 204.013 144.836 202.68C146.036 201.347 147.436 200.307 149.036 199.56C150.662 198.787 152.422 198.4 154.316 198.4C157.062 198.4 159.329 198.973 161.116 200.12C162.902 201.267 164.249 202.76 165.156 204.6L162.396 206.52C161.569 204.867 160.436 203.64 158.996 202.84C157.556 202.04 155.969 201.64 154.236 201.64C152.796 201.64 151.489 201.947 150.316 202.56C149.142 203.173 148.129 204.013 147.276 205.08C146.449 206.12 145.809 207.307 145.356 208.64C144.929 209.973 144.716 211.36 144.716 212.8C144.716 214.827 145.142 216.693 145.996 218.4C146.876 220.08 148.062 221.427 149.556 222.44C151.049 223.453 152.729 223.96 154.596 223.96C156.116 223.96 157.569 223.6 158.956 222.88C160.369 222.133 161.702 221 162.956 219.48V215.56H156.836V212.84H165.996V227H162.956V223.16C160.502 225.853 157.622 227.2 154.316 227.2Z"
							fill="currentColor"
						></path>
					</svg>
					<li>DevHaus Academy</li>
				</div>
			</ul>
		),
	},
	/* {
		title: "Certifications",
		id: "certifications",
		content: (
			<ul className="list-disc pl-2">
				<li>German Telc B2</li>
				<li>WSET 2 Wine Certification</li>
			</ul>
		),
	}, */
];

const AboutMe = () => {
	const [tab, setTab] = useState("skills");
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};

	return (
		<section id="about" className="text-white ">
			<div className="grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h1 className="text-4xl font-bold text-white mb-4">
						About Me
					</h1>
					<p className="text-base md:text-lg">
						I am a full stack web developer with a passion for
						creating interactive and responsive web applications. I
						have experience working with JavaScript, React, Redux,
						Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and
						Git. I am a quick learner and I am always looking to
						expand my knowledge and skill set. I am a team player
						and I am excited to work with others to create amazing
						applications.
					</p>
					<div className="flex flex-row justify-start mt-8">
						<TabButton
							selectTab={() => handleTabChange("skills")}
							active={tab === "skills"}
						>
							{" "}
							Skills{" "}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange("education")}
							active={tab === "education"}
						>
							{" "}
							Education{" "}
						</TabButton>
						{/* <TabButton
							selectTab={() => handleTabChange("certifications")}
							active={tab === "certifications"}
						>
							{" "}
							Certifications{" "}
						</TabButton> */}
					</div>
					<div className="mt-4 border-[#33353F] border rounded-md p-3">
						{tab ===
						"education" /* || tab === "certifications" */ ? (
							TAB_DATA.find((t) => t.id === tab).content
						) : (
							<SkillsTab />
						)}
					</div>
				</div>
				<Image
					src="/images/code-one.jpg"
					alt="Books and Laptop"
					width={500}
					height={500}
					className="h-full rounded-full"
				/>
			</div>
		</section>
	);
};

export default AboutMe;