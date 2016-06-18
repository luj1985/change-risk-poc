import React, { Component } from 'react';
import Form from 'grommet/components/Form';
import Button from 'grommet/components/Button';
import Launch from 'grommet/components/icons/base/Launch';
import FormField from 'grommet/components/FormField';
import FormFields from 'grommet/components/FormFields';
import Footer from 'grommet/components/Footer';
import Box from 'grommet/components/Box';

export default class DescriptionPanel extends Component {
  submitDescription() {
    console.log('clicked');
  }

  render () {
    return (
      <Form>
        <FormFields>
          <FormField label="Change Description" htmlFor="description">
            <textarea type="text" id="description" rows="7" />
          </FormField>
        </FormFields>
        <Footer>
          <Box pad={{vertical: 'medium'}}>
            <Button icon={<Launch />} label="Submit" primary={true} strong={true} onClick={this.submitDescription} />
          </Box>
        </Footer>
      </Form>
    );
  }
};
