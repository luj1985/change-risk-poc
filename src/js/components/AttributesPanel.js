import React, { Component } from 'react';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import FormFields from 'grommet/components/FormFields';

export default class AttributesPanel extends Component {
  constructor () {
    super();
    this.state = {
      attributes: [{
        name: 'affected.item',
        label: 'Service',
        value: 'Application',
        text: 'Application',
        type: 'combo'
      }, {
        name: 'impact',
        label: 'Impact',
        value: '1',
        text: '1 - Enterprise',
        type: 'combo'
      }, {
        name: 'model',
        label: 'Change Model',
        value: 'regular',
        text: 'Regular',
        type: 'combo'
      }]
    };
  }

  render () {
    let attrs = this.state.attributes.map((attr, index) => {
      var field;
      if (attr.type === 'combo') {
        field = (
          <select id={attr.name} defaultValue={attr.value}>
            <option value={attr.value}>{attr.text}</option>
          </select>
        )
      } else {
        field = (<input type="text" id={attr.name} defaultValue={attr.text}/>)
      }
      return (
        <FormField key={index} label={attr.label} htmlFor={attr.name}>
          {field}
        </FormField>
      );
    });

    return (
      <Form compact={false} fill={false}>
        <FormFields>
          {attrs}
        </FormFields>
      </Form>
    );
  }
};
