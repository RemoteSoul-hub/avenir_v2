const Post = require('../models/Post');

exports.getNewArrivals = async (req, res) => {
	const sortBy = req.query.sortBy ? req.query.sortBy : 'desc';
	const limit = req.query.limit ? parseInt(req.query.limit) : parseInt(3);

	try {
		const newArrivals = await Post.find({})
			.sort({ createdAt: sortBy })
			.limit(limit);

		res.json({
			newArrivals,
		});
	} catch (err) {
		console.log(err, 'filter Controller.getNewArrivals error');
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
};

exports.searchByQueryType = async (req, res) => {
	const { type, query } = req.body;

	try {
		let posts;

		switch (type) {
			case 'text':
				posts = await Post.find({ $text: { $search: query } });
				break;
			case 'category':
				posts = await Post.find({ tags: query });
				break;
		}

		if (posts.length <= 0) {
			posts = await Post.find({});
		}

		res.json({ posts });
	} catch (err) {
		console.log(err, 'filter Controller.searchByQueryType error');
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
};