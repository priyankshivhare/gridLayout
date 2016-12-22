var React = require('react');

var buttonStyle = {
	backgroundColor: '#ffffff',
	borderWidth: 1,
	borderStyle: 'solid',
	borderColor: '#222222',
	borderRadius: 4,
	marginRight:2
}
var ButtonBlock = React.createClass({
	render: function(){
		return (
				<div className="buttonWrapper">
					<a href={this.props.viewBtnUrl}><button style={buttonStyle}>View</button></a>
					<a href={this.props.exploreBtnUrl}><button style={buttonStyle}>Explore</button></a>
				</div>
		)
	}
});

module.exports = ButtonBlock;