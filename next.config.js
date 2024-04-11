/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
// next.config.js
module.exports = {
	env: {
		YOUR_SERVICE_ID: process.env.YOUR_SERVICE_ID,
		YOUR_TEMPLATE_ID: process.env.YOUR_TEMPLATE_ID,
		YOUR_PUBLIC_KEY: process.env.YOUR_PUBLIC_KEY,
	},
};
