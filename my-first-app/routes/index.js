const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
	const data = {
		name: 'Home',
		date: 'June 1, 2019',
		profiles: [
			{name: 'Mike', city: 'Sydney', profession: 'doctor'},
			{name: 'Cindy', city: 'Perth', profession: 'lawyer'},
			{name: 'Joe', city: 'Sydeny', profession: 'programmer'}
		]
	};
	res.render('index', data);


});

router.get('/json', (req, res, next) => {
	const data = {name: 'David', location: 'Sydney'};
	res.json(data);
});

router.get('/html', (req, res, next) => {
	const html = '<html><h1 style="color:red">This is an HTML response</h1></html>'
	res.send(html);
});

router.get('/query', (req, res, next) => {
	const query = req.query;
	res.json(query);
});

// In this case it needs all three params
router.get('/params/:name/:location/:occupation', (req, res, next) => {
	const params = req.params;
	res.json({
		params: params
	})
});

module.exports = router;