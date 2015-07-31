var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Content = React.createClass({
  render: function() {
  	return (
			<div className="content">
				<h1>This is the main content</h1>
				<RouteHandler />
			</div>
  	);
  }
});

module.exports = Content;