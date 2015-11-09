var React = require('react');
var TodoTextInput = require('./TodoTextInput');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var Header = React.createClass({
	render: function() {
		return (
			<header id="header">
				<h1>Todos</h1>
				<TodoTextInput
					id="new-todo"
					placeholder="what needs to be done?"
					onSave={this._onSave} />
			</header>
		);
	},

	_onSave: function(text) {
		if (text.trim()) {
			AppDispatcher.dispatch({
				actionType: 'TODO_CREATE',
				text: text
			});
		}
	}
});

module.exports = Header;