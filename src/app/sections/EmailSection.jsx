"use client";

import React, { useRef, useState, useEffect } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from "emailjs-com";

const EmailSection = () => {
	const form = useRef();
	const [emailSubmitted, setEmailSubmitted] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.YOUR_SERVICE_ID,
				process.env.YOUR_TEMPLATE_ID,
				form.current,
				process.env.YOUR_PUBLIC_KEY
			)
			.then(
				(result) => {
					console.log("Email successfully sent!", result.text);
					setEmailSubmitted(true);
				},
				(error) => {
					console.error("Failed to send email. Error:", error.text);
				}
			);

		e.target.reset();
	};

	useEffect(() => {
		if (emailSubmitted) {
			const handleOutsideClick = (e) => {
				if (!form.current.contains(e.target)) {
					setEmailSubmitted(false);
				}
			};

			document.addEventListener("mousedown", handleOutsideClick);

			return () => {
				document.removeEventListener("mousedown", handleOutsideClick);
			};
		}
	}, [emailSubmitted]);

	return (
		<section
			id="contact"
			className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative pt-6 border-t border-[#33353F]"
		>
			<div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

			<div className="flex flex-col items-center justify-center">
				<h5 className="text-xl font-bold text-white my-2">
					Let&apos;s Connect
				</h5>
				<p className="text-justify text-[#ADB7BE] mb-4 max-w-md">
					I&apos;m currently looking for new opportunities, my inbox
					is always open. Whether you have a question or just want to
					say hi, I&apos;ll try my best to get back to you!
				</p>
				<div className="socials flex flex-row justify-center gap-14">
					<Link href="https://github.com/acz1992" target="_blank">
						<Image src={GithubIcon} alt="Github Icon" />
					</Link>
					<Link
						href="https://www.linkedin.com/in/adam-zdan-michajlowicz-1245ab4a/"
						target="_blank"
					>
						<Image src={LinkedinIcon} alt="Linkedin Icon" />
					</Link>
				</div>
			</div>
			<div>
				<form className="flex flex-col" ref={form} onSubmit={sendEmail}>
					<div className="mb-6">
						<label
							htmlFor="email"
							className="text-white block mb-2 text-sm font-medium"
						>
							Enter your email
						</label>
						<input
							name="email"
							type="email"
							id="email"
							required
							className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
							placeholder="Your email address"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="subject"
							className="text-white block mb-2 text-sm font-medium"
						>
							Subject
						</label>
						<input
							name="subject"
							type="text"
							id="subject"
							required
							className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
							placeholder="Subject line"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="message"
							className="text-white block text-sm mb-2 font-medium"
						>
							Message
						</label>
						<textarea
							name="message"
							id="message"
							className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
							placeholder="Leave your message here"
						/>
					</div>

					<button
						type="submit"
						className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
					>
						Send Message
					</button>
				</form>
				{emailSubmitted && (
					<div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
						<div className="bg-white p-5 rounded-lg">
							<p className="text-green-500  text-base font-bold mt-2">
								I&apos;ll be in touch soon
							</p>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default EmailSection;
