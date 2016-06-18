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
      }, {
        name: 'risk',
        label: 'Risk',
        value: 0.58,
        type: 'risk'
      }]
    };
  }

  render () {
    let attrs = this.state.attributes.map((attr, index) => {
      switch(attr.type) {
        case 'combo':
          return (
            <FormField key={index} label={attr.label} htmlFor={attr.name}>
              <select id={attr.name} defaultValue={attr.value}>
                <option value={attr.value}>{attr.text}</option>
              </select>
            </FormField>
          );
        case 'risk':
          return (
            <FormField key={index} label={`${attr.label} (${attr.value})`} htmlFor={attr.name}>
              <input id={attr.name} type="range" className="risk"
                     readOnly={true}
                     defaultValue={attr.value * 100} min="0" max="100" htmlReadOnly={true}/>
            </FormField>
          );
        default:
          return (
            <FormField key={index} label={attr.label} htmlFor={attr.name}>
              <input type="text" id={attr.name} defaultValue={attr.text} />
            </FormField>
          );
      }
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
