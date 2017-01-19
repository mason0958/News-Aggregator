import './sports.css';
import React from 'react';
import $ from 'jquery'; 

const newsApiKey = '275258a3655c449ba4907833f5baf08b';
const apiMain = 'https://newsapi.org/v1/articles?source=';	
const apiTail = '&apiKey='


class ArticleColOne extends React.Component{
	render (){
		return(
			<div>
	 			{this.props.articles.map(function(article, index){
	 				//this returns the individual talkSPORT articles and photos
			return(
				<div key={index}>
					<div style={{marginBottom: 10, float:'left', borderBottom:'1px solid lightgrey'}}>
						<div style={{fontSize: 16, margin:'4%'}}><a href={article.url}><img src={article.urlToImage} alt='s'
							style={{width:'65%', height:'45%'}} /></a>
							<br/>
							<a style={{color:'black', fontWeight:500, fontSize:15}} href={article.url}>{article.title}</a>
						</div>
					</div>
					<div className="talkSportsTitles">
						{article.title}
					</div>
				</div>
			)
			})}
			</div>
		)
	}
}

class FirstSportsComponent extends React.Component{
		constructor(props){
		super(props);
		this.state = {sportsArticlesOneArray: []};
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	componentDidMount () {
		var apiOneSource = 'talksport';
		var url = apiMain + apiOneSource + apiTail + newsApiKey;
		$.getJSON(url, (sportsDataTalkSport) =>{
			this.setState({sportsArticlesOneArray: sportsDataTalkSport.articles})
		});	
	}
	render (){
		// console.log(this.state.sportsArticlesArray)
		//this returns the TalkSPORT logo header
		return(
			<div className="col-xs-11 col-sm-6 col-md-3" style={{marginLeft:20, borderRight:'3px solid lightgrey', height:'90vh', overflow:'scroll'}}>
				<img alt='talksports' src={require('./images/talksport')} className="sportsSourcePics" />
				<ArticleColOne articles={this.state.sportsArticlesOneArray} />
			</div>
		);
	}
}

class ArticleColTwo extends React.Component{
	//this returns individual articles and photos
	render (){
		return(
			<div className="espn_articles">
	 			{this.props.articles.map(function(article, index){
	 				if(index == 0){
	 					return(
	 						//return the first headline as a BIG picture
							<div key={index} style={{textAlign:"center"}}>
								<div style={{marginBottom: 5, float:'left'}} >
									<div style={{fontSize: 30, margin:'4%'}}><a href={article.url}><img src={article.urlToImage} alt='s'
										style={{width:'100%', height:'65%'}} /></a>
										<a className="big_espn_title" href={article.url}>{article.title}</a>
									</div>
								</div>		
								<div className="espn_desc" style={{marginBottom: 10, borderBottom:'1px solid lightgrey'}}>
									{article.description}
								</div>
							</div>
	 					)
	 				}else if(index !== 0){
	 					//return the other top headlines as smaller
						return(
							<div key={index}>
								<div style={{marginBottom: 10, float:'left'}} >
									<div style={{fontSize: 16, margin:'4%'}}><a href={article.url}><img src={article.urlToImage} alt='s'
										style={{width:'65%', height:'45%'}} /></a>
										<a style={{color:'black', fontWeight:500, fontSize:15}} href={article.url}>{article.title}</a>
									</div>
								</div>		
								<div className="espn_desc" style={{marginBottom: 10, borderBottom:'1px solid lightgrey'}}>
									{article.description}
								</div>
							</div>
						)
					}
				})}
			</div>
		)
	}
}

class HeaderImgColumnTwo extends React.Component{
	constructor(props){
		super(props);
		this.state = {sportsArticlesTwoArray: []};
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	componentDidMount () {
		var apiTwoSource = 'espn';
		var url = apiMain + apiTwoSource + apiTail + newsApiKey;
		$.getJSON(url, (sportsData) =>{
			this.setState({sportsArticlesTwoArray: sportsData.articles})
		});	
	}
	render (){
		var articlesArrayTwo =[];
		this.state.sportsArticlesTwoArray.map((article, index)=>{
			articlesArrayTwo.push(article.title)
		})
		//this returns the ESPN logo header
		return(
			<div className="col-xs-11 col-sm-5 col-md-5" style={{marginLeft: 40}}>
				<div>
					<img alt='espn' src={require('./images/ESPN.png')} className="espn_img" />
				</div>
				 <ArticleColTwo articles={this.state.sportsArticlesTwoArray} />
			</div>
		);
	}
}

var SecondSportsComponent = React.createClass({
	//this returns the entire second column
	render: function(){
		return(
			<div>
				<HeaderImgColumnTwo />
			</div>
		)
	}
})

class ArticleColThree extends React.Component{
	//this returns the individual articles and pictures
	render (){
		return(
			<div>
	 			{this.props.articles.map(function(article, index){
					return(
						<div key={index}>
							<div style={{marginBottom: 10, float:'left', borderBottom:'1px solid lightgrey'}} >
								<div style={{fontSize: 16, margin:'4%'}}><a href={article.url}><img src={article.urlToImage} alt='s'
									style={{width:'65%', height:'45%'}} /></a>
									<a style={{color:'black', fontWeight:500, fontSize:15}} href={article.url}>{article.title}</a>
								</div>
							</div>			
						<div className="foxSports">
							{article.title}
						</div>
					</div>
					)
				})}
			</div>
		)
	}
}


class ArticlesColumnThree extends React.Component{
		constructor(props){
		super(props);
		this.state = {sportsArticlesThreeArray: []};
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	componentDidMount () {
		var apiThreeSource = 'fox-sports';
		var url = apiMain + apiThreeSource + apiTail + newsApiKey;
		$.getJSON(url, (sportsDataFox) =>{
			this.setState({sportsArticlesThreeArray: sportsDataFox.articles})
		});	
	}
	render (){
		// console.log(this.state.sportsArticlesArray)
		//this returns the FOXSPORTS LOGO
		return(
			<div className="col-xs-11 col-sm-7 col-md-3" style={{float:'right', margin:'auto', borderLeft:'3px solid lightgrey'}}>
			<img alt='fox-sports' src={require('./images/Fox_Sports_Logo.png')}  style={{
					float:'left',width:'50%', height:'50%', margin:'20px 23% 20px'}} />
				<ArticleColThree articles={this.state.sportsArticlesThreeArray} />
			</div>
		);
	}
}

var ThirdSportsComponent = React.createClass({
	//this returns the entire 3rd column
	render: function(){
		return(
			<div className='foxsportscolumn'>
				<ArticlesColumnThree />
			</div>
		)
	}
})

var Sports = React.createClass({
	render: function(){
		return(
			<div className="sports_page">
				<FirstSportsComponent />
				<SecondSportsComponent />
				<ThirdSportsComponent />
			</div>
		)
	}
})

export default Sports