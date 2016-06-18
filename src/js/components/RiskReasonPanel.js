import React, { Component } from 'react';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';

export default class RiskReasonPanel extends Component {

  render () {
    return (
      <List>
        <ListItem>This is list item 1</ListItem>
        <ListItem>This is list item 2</ListItem>
        <ListItem>This is list item 3</ListItem>
        <ListItem>This is list item 4</ListItem>
      </List>
    );
  }
};
