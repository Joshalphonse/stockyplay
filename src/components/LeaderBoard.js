import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Image, List } from "semantic-ui-react";
import { Feed } from "semantic-ui-react";
import { Img } from "./styled-components";

const LeaderBoard = () => (
  //
  // const image = styled.img {
  //   width: 50%
  // }

  <Feed>
    <Feed.Event>
      <Feed.Label
        className="img"
        image="https://media.giphy.com/media/Lb4IZLmCfALhm/giphy.gif"
      />
      <Feed.Content>
        <Feed.Date>1 days ago</Feed.Date>
        <Feed.Summary>
          <a>Alicia Syrett</a> is leading Stockaid with 8% gain.
        </Feed.Summary>
      </Feed.Content>

      <Feed.Content>
        <Feed.Date>1 days ago</Feed.Date>
        <Feed.Summary>
          <a>Uriridiakoghene (Ulili) Onovakpuri</a> is leading Stockaid with 8%
          gain.
        </Feed.Summary>
      </Feed.Content>

      <Feed.Content>
        <Feed.Date>1 days ago</Feed.Date>
        <Feed.Summary>
          <a>Alvin Ailey</a> is leading Stockaid with 7.9% gain.
        </Feed.Summary>
      </Feed.Content>

      <Feed.Content>
        <Feed.Date>2 days ago</Feed.Date>
        <Feed.Summary>
          <a>Wayne Sutton</a> is leading Stockaid with 7% gain.
        </Feed.Summary>
      </Feed.Content>

      <Feed.Content>
        <Feed.Date>2 days ago</Feed.Date>
        <Feed.Summary>
          <a>Jesse Jackson</a> is leading Stockaid with 5% gain.
        </Feed.Summary>
      </Feed.Content>

      <Feed.Content>
        <Feed.Date>2 days ago</Feed.Date>
        <Feed.Summary>
          <a>Christopher Hollins</a> is leading Stockaid with 8% gain.
        </Feed.Summary>
      </Feed.Content>

      <Feed.Content>
        <Feed.Date>2 days ago</Feed.Date>
        <Feed.Summary>
          <a>Elias Bizannes</a> is leading Stockaid with 2% gain.
        </Feed.Summary>
      </Feed.Content>
    </Feed.Event>
  </Feed>
);

export default LeaderBoard;
