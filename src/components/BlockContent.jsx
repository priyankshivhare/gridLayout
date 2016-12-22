var React = require('react');

var bTitleStyle = {
	fontSize: 18
};
var bTextStyle = {
	fontSize: 16
}
var BlockContent = React.createClass({
	render: function(){
		return (
			<div>
				<h2 className="text-center" style={bTitleStyle}>{this.props.blockTitle}</h2>
				<p className="text-center" style={bTextStyle}>{this.props.blockText}</p>
			</div>
		)
	}
});

module.exports = BlockContent;