import '../scss/index.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Section from 'grommet/components/Section';
import DescriptionPanel from './components/DescriptionPanel';
import AttributesPanel from './components/AttributesPanel';
import RiskReasonPanel from './components/RiskReasonPanel';

class Main extends Component {
  render () {
    return (
      <App inline={true}>
        <Header large={true}>
          <Title>Change Risk Analysis POC</Title>
        </Header>

        <Section><DescriptionPanel /></Section>
        <Section><AttributesPanel /></Section>
        <Section><RiskReasonPanel /></Section>
      </App>
    );
  }
};

let element = document.getElementById('content');
ReactDOM.render(React.createElement(Main), element);
