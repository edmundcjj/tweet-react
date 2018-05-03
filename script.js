console.log("Display URL => " + tweets[0].entities.urls[0].display_url);
//
// var monkey = "Hello World";

// Individual Tweet
class Tweet_Item extends React.Component {
    render() {
        return (
          <div>
            <h3 style={{color: 'blue'}}>{this.props.screen_name}</h3>
            <h5 style={{color: 'red'}}>{this.props.display_url}</h5>
            <p>ID => {this.props.index}</p>
            <p>Text => {this.props.text}</p>
            <hr></hr>
          </div>
        );
    }
}

// All the tweets
class Tweet_List extends React.Component {
    render() {
        let tweetElements = this.props.tweets.map( (item, index) => {
                              return <Tweet_Item key={item.id} index={item.id} text={item.text} 
                                                 screen_name={item.user.screen_name} display_url={item.user.entities.url.urls[0].display_url.toLowerCase()}>
                              </Tweet_Item>
                            });
        return (
          <div>
            {tweetElements}
          </div>
        );
    }
}

ReactDOM.render(
    <Tweet_List tweets={tweets}/>,
    document.getElementById('root')
);
