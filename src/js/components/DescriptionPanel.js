import React, { Component } from 'react';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import FormFields from 'grommet/components/FormFields';

export default class DescriptionPanel extends Component {

  descriptionChanged(e) {
    console.log(this);
  }

  render () {
    return (
      <Form>
        <FormFields>
          <FormField label="Change Description" htmlFor="description">
            <textarea type="text" id="description" rows="7" onChange={this.descriptionChanged}/>
          </FormField>
        </FormFields>
      </Form>
    );
  }
};
