"use client";

import React, { useRef } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

const recaptchaRef = React.createRef();

const EmailSection = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		const recaptchaValue = recaptchaRef.current.getValue();
		this.props.onSubmit(recaptchaValue);
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
				},
				(error) => {
					console.error("Failed to send email. Error:", error.text);
				}
			);
		e.target.reset();
	};

	return (
		<section
			id="contact"
			className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative pt-6 border-t border-[#33353F]"
		>
			<div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

			<div className="flex flex-col items-center justify-center">
				{/*  className="flex flex-col justify-center items-center" */}
				<h5 className="text-xl font-bold text-white my-2">
					Let&apos;s Connect
				</h5>
				<p className="text-justify text-[#ADB7BE] mb-4 max-w-md">
					{" "}
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
					<ReCAPTCHA
						ref={recaptchaRef}
						sitekey={process.env.CAPTCHA_SITE_KEY}
						onChange={sendEmail}
					/>
					<button
						value=""
						type="submit"
						className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
					>
						Send Message
					</button>

					{/* 	{emailSubmitted && (
						<p className="text-green-500 text-sm mt-2">
							Email sent succesfully!
						</p>
					)} */}
				</form>
			</div>
		</section>
	);
};

export default EmailSection;
