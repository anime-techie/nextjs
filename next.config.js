module.exports = {
	images: {
		domains: ['res.cloudinary.com'],
		async rewrites() {
			return [
				{
					source: '/api/:path*',
					destination: 'https://nextjstest.vercel.app/:path*',
				},
			];
		},
	},
};
