const express = require('express');

const router = express.Router();


router.get('/', (req, res, next) => {
	res.status(200).json({
		message: "Handling Get Requests to Products"
	});
});

router.post('/', (req, res, next) => {
	res.status(200).json({
		message: "Handling Post Requests to Products"
	});
});

module.exports = router;