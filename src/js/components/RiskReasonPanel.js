import React, { Component } from 'react';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';

export default class RiskReasonPanel extends Component {

  render () {
    return (
      <List>
        <ListItem>C10001</ListItem>
        <ListItem>C10002</ListItem>
        <ListItem>C10003</ListItem>
      </List>
    );
  }
};
