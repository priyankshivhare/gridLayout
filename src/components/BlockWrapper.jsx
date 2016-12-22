var React = require('react');
var ImageBlock = require('./ImageBlock.jsx');
var BlockContent = require('./BlockContent.jsx');
var ButtonBlock = require('./ButtonBlock.jsx');

var blockStyle = {
	borderStyle: 'solid',
	borderWidth: 1,
    borderColor: '#eeeeee'
},
innerBlock = {
	position: 'relative'
}
var BlockWrapper = React.createClass({
	render: function(){
		return (
			<div className="col-sm-6 col-md-4 col-lg-3">
				<div style={blockStyle}>
					<div className="hoverSelector" style={innerBlock}>
						<ButtonBlock viewBtnUrl={this.props.viewBtnUrl} exploreBtnUrl={this.props.exploreBtnUrl}/>
						<ImageBlock imageUrl={this.props.imageUrl} />
					</div>
					<BlockContent blockTitle={this.props.blockTitle} blockText={this.props.blockText} />
				</div>
			</div>
		)
	}
});

module.exports = BlockWrapper;