import '../scss/index.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from 'grommet/components/App';
import Title from 'grommet/components/Title';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Form from 'grommet/components/Form';
import Launch from 'grommet/components/icons/base/Launch';
import FormField from 'grommet/components/FormField';
import FormFields from 'grommet/components/FormFields';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Rest from 'grommet/utils/Rest';

class Main extends Component {

  constructor() {
    super();
    this.state = {
      attributes: [],
      features: []
    };
  }

  submitDescription(e) {
    let description = this.refs.description.value;

    Rest.get('/suggest.json', { text : description }).then(response => {
      let data = JSON.parse(response.text);
      this.setState({
        attributes : data.attributes,
        features : data.features
      });
    }, error => {
      window.alert(error);
    });
  }

  renderAttribute(attr, key) {
    switch(attr.type) {
      case 'combo':
        return (
          <FormField key={key} label={attr.label} htmlFor={attr.name}>
            <select id={attr.name} defaultValue={attr.value}>
              <option value={attr.value}>{attr.text}</option>
            </select>
          </FormField>
        );
      case 'risk':
        return (
          <FormField key={key} label={`${attr.label} (${attr.value})`} htmlFor={attr.name}>
            <input id={attr.name} type="range" className="risk"
                   readOnly={true}
                   defaultValue={attr.value * 100} min="0" max="100" htmlReadOnly={true}/>
          </FormField>
        );
      default:
        return (
          <FormField key={key} label={attr.label} htmlFor={attr.name}>
            <input type="text" id={attr.name} defaultValue={attr.text} />
          </FormField>
        );
    }
  }

  renderFeature(feature, key) {
    return (
      <ListItem key={key}>
        <span className="change-id">{feature.id}</span>
        <span className="change-title">{feature.title}</span>
      </ListItem>
    );
  }

  render () {
    return (
      <App inline={true}>
        <Header large={true}>
          <Title>Change Risk Analysis POC</Title>
        </Header>

        <Section>
          <Form>
            <FormFields>
              <FormField label="Change Description" htmlFor="description">
                <textarea type="text" ref="description" id="description" rows="7" placeholder = "Enter your Change description here"/>
              </FormField>
            </FormFields>
            <Footer>
              <Box pad={{vertical: 'medium'}}>
                <Button icon={<Launch />} label="Submit" primary={true} strong={true} onClick={this.submitDescription.bind(this)} />
              </Box>
            </Footer>
          </Form>
        </Section>

        <Section>
          <Form>
            <FormFields>
              {this.state.attributes.map(this.renderAttribute)}
            </FormFields>
          </Form>
        </Section>

        <Section>
          <List>
            {this.state.features.map(this.renderFeature)}
          </List>
        </Section>
      </App>
    );
  }
};

let element = document.getElementById('content');
ReactDOM.render(React.createElement(Main), element);
