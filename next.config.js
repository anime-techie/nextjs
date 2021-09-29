module.exports = {
	images: {
		domains: ['res.cloudinary.com'],
		async rewrites() {
			return [
				{
					source: '/api/*',
					destination: 'https://*',
				},
			];
		},
	},
};
