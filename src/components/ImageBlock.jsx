var React = require('react');

var imgBlockStyle = {
	margin: 0	
};
var ImageBlock = React.createClass({
	render: function(){
		return (
			<div>
				<img style={imgBlockStyle} src={this.props.imageUrl} className="img-responsive center-block" />
			</div>
		)
	}
});

module.exports = ImageBlock;