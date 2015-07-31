var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Content = require('./components/Content.jsx');
var Welcome = require('./components/Welcome.jsx');
var About = require('./components/About.jsx');
var Login = require('./components/Login.jsx');

var routes = (
	<Route path='/' handler={Content}>
		<Route path='About' handler={About} />
		<Route path='Login' handler={Login} />
		<DefaultRoute handler={Welcome} />
	</Route>
);


module.exports = routes;