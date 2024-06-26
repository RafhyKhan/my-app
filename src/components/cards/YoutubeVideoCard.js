import { Button } from "@mui/material";


/*
import YoutubeEmbed from "../card-components/YoutubeEmbed.js";

function YoutubeVideoCard(){

    return (
        <>
        <YoutubeEmbed embedId="dQw4w9WgXcQ" />
        </>
    )
}

export default YoutubeVideoCard;

*/
import { Component } from "react";
import ReactPlayer from "react-player";

// TODO: change this class component to functional

class YouTubePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
  }

  handleYouTubeClick = () => {
    this.setState({
      isClicked: true
    });
  };

  render() {
    return (
      <div>
        <p></p>
        <Button onClick={this.handleYouTubeClick}>The Answer to Life</Button>
        {this.state.isClicked && (
          <div>
            <ReactPlayer playing="play" url="https://youtu.be/dQw4w9WgXcQ" />
          </div>
        )}
      </div>
    );
  }
}
export default YouTubePlayer;
