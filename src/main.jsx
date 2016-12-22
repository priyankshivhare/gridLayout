var React = require('react');
var ReactDOM = require('react-dom');
var ImageBlock =require('./components/ImageBlock.jsx');
var BlockContent =require('./components/BlockContent.jsx');
var BlockWrapper =require('./components/BlockWrapper.jsx');

//dataFromServer can be considered as data source from server
var Main = React.createClass({

	dataFromServer: [{id:1, image:"http://lorempixel.com/400/400/", blockTitle:"Sample Title",blockText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",viewBtnUrl:"http://www.example.com",exploreBtnUrl:"http://www.hotmail.com"},
	{id:2, image:"http://lorempixel.com/400/400/", blockTitle:"Random Text",blockText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",viewBtnUrl:"http://www.bitbucket.com",exploreBtnUrl:"http://www.yahoo.com"},
	{id:3, image:"http://lorempixel.com/400/400/", blockTitle:"Vague Title",blockText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",viewBtnUrl:"http://www.myntra.com",exploreBtnUrl:"http://www.wikipedia.com"},
	{id:4, image:"http://lorempixel.com/400/400/", blockTitle:"Normal Title",blockText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",viewBtnUrl:"http://www.flipkart.com",exploreBtnUrl:"http://www.gmail.com"}],

	render: function(){
	var gridList = this.dataFromServer.map(function(list){
		return <BlockWrapper key={list.id} imageUrl={list.image} blockTitle={list.blockTitle} blockText={list.blockText} viewBtnUrl={list.viewBtnUrl} exploreBtnUrl={list.exploreBtnUrl}/>
	})
	return (
	<div>
		{gridList}
	</div>
	)
		
	}
});
ReactDOM.render(<Main/>, document.getElementById('app'));