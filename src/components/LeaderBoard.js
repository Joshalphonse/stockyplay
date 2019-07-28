import React from "react";
import { withRouter } from "react-router-dom";
import { Image, List } from 'semantic-ui-react'

const LeaderBoard = () => (

  <List celled>
  <h1 classname="header"> User Leader Board </h1>
  <Image classname="trophyImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMooRfgyWvg5Q9UmHyrFYWL2nPuzXKbtMgnw0Us-4a7YXlwYFC" alt="trophy"/>
    <List.Item>
      <Image classname="img" avatar src="https://media.giphy.com/media/Lb4IZLmCfALhm/giphy.gif" />
      <List.Content>
        <List.Header>Robert Abbott</List.Header>
        1st place leader with $$
      </List.Content>
    </List.Item>
    <List.Item>
      <Image classname="img" avatar src="https://media.giphy.com/media/Lb4IZLmCfALhm/giphy.gif" />
      <List.Content>
        <List.Header>Alvin Ailey</List.Header>
        Dancing his way to the top with $$
      </List.Content>
    </List.Item>
    <List.Item>
      <Image classname="img" avatar src="https://media.giphy.com/media/Lb4IZLmCfALhm/giphy.gif" />
      <List.Content>
        <List.Header>Muhammed Ali</List.Header>
        Fighting his way to the top with $$$
      </List.Content>
    </List.Item>
    <List.Item>
      <Image classname="img" avatar src="https://media.giphy.com/media/Lb4IZLmCfALhm/giphy.gif" />
      <List.Content>
        <List.Header> Richard Allen</List.Header>
        Richard has x amount of dollars
      </List.Content>
    </List.Item>
    <List.Item>
      <Image classname="img" avatar src="https://media.giphy.com/media/Lb4IZLmCfALhm/giphy.gif" />
      <List.Content>
        <List.Header>Maya Angelou</List.Header>
        Rising to greatness with $$$ amount of money
      </List.Content>
    </List.Item>
    <List.Item>
      <Image classname="img" avatar src="https://media.giphy.com/media/Lb4IZLmCfALhm/giphy.gif" />
      <List.Content>
        <List.Header>Ella Baker</List.Header>
        Ella has x amount of dollars
      </List.Content>
    </List.Item>
    <List.Item>
      <Image classname="img" avatar src="https://media.giphy.com/media/Lb4IZLmCfALhm/giphy.gif" />
      <List.Content>
        <List.Header>James Baldwin</List.Header>
          James has x amount of dollars
      </List.Content>
    </List.Item>
    <List.Item>
      <Image classname="img" avatar src="https://media.giphy.com/media/Lb4IZLmCfALhm/giphy.gif" />
      <List.Content>
        <List.Header> Jean-Michel Basquiat</List.Header>
        Creativy spending his money to land him on the leader board.
      </List.Content>
    </List.Item>
    <List.Item>
      <Image classname="img" avatar src="https://media.giphy.com/media/Lb4IZLmCfALhm/giphy.gif" />
      <List.Content>
        <List.Header>Muhammed Ali</List.Header>
        Fighting his way to the top with $$$
      </List.Content>
    </List.Item>
    <List.Item>
      <Image classname="img" avatar src="https://media.giphy.com/media/Lb4IZLmCfALhm/giphy.gif" />
      <List.Content>
        <List.Header>Mary Mcleod Bethune</List.Header>
        Mary has x amount of dollars
      </List.Content>
    </List.Item>
    <h3>Total Users: 345</h3>
  </List>
)
export default LeaderBoard;
