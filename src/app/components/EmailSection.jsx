import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
	return (
		<section
			id="contact"
			className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
		>
			<div>
				<h5 className="text-xl font-bold text-white my-2">
					Let&apos;s Connect
				</h5>
				<p className="text-[#ADB7BE] mb-4 max-w-md">
					{" "}
					I&apos;m currently looking for new opportunities, my inbox
					is always open. Whether you have a question or just want to
					say hi, I&apos;ll try my best to get back to you!
				</p>
				<div className="socials flex flex-row gap-2">
					<Link href="https://github.com/acz1992">
						<Image src={GithubIcon} alt="Github Icon" />
					</Link>
					<Link href="https://www.linkedin.com/in/adam-zdan-michajlowicz-1245ab4a/">
						<Image src={LinkedinIcon} alt="Linkedin Icon" />
					</Link>
				</div>
			</div>
			<div>
				<form className="flex flex-col gap-4">
					<label htmlFor="email" type="email" className="text-white">
						Your email
					</label>
					<input
						type="email"
						id="email"
						required
						className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]"
						placeholder="Add email"
					/>
				</form>
			</div>
		</section>
	);
};

export default EmailSection;
