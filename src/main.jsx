var React = require('react');
var Router = require('react-router');
var Content = require('./components/Content.jsx');
var routes = require('./routes.jsx');

Router.run(routes, function(Root, state) {
  React.render(<Root />, document.body);
});