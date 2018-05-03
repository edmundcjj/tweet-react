console.log("Display URL => " + tweets[0].entities.urls[0].display_url);
//
// var monkey = "Hello World";

// Individual Tweet
class Tweet_Item extends React.Component {
    render() {
        return (
          <div>
            <img src={this.props.profile_img} alt="Display Picture"></img>
            <h3><b>{this.props.name}   @ <a href={this.props.profile_url} target="_blank">{this.props.screen_name}</a></b></h3>
            <p>{this.props.tweet_text}</p>
            <p id="retweets_count">{this.props.retweet_count} retweets</p>
            <hr></hr>
          </div>
        );
    }
}

// All the tweets
class Tweet_List extends React.Component {
    render() {
        let tweetElements = this.props.tweets.map( (item) => {
                              return <Tweet_Item key={item.id}
                                                 tweet_text={item.text}
                                                 name={item.user.name}
                                                 screen_name={item.user.screen_name}
                                                 profile_img={item.user.profile_image_url_https}
                                                 retweet_count={item.retweet_count}
                                                 profile_url="https://twitter.com/kanyewest">
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
