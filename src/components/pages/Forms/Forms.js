import React, { Component } from 'react';
import FormPageInput from './FormPageInput/FormPageInput';
import FormList from './FormList/FormList';

class FormPage extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            Age: '',
            Gender: '',
            Address: '',
            State: '',
            Zipcode: '',
            Other: '',
            List: ['1','2']
        }; 
      }

      handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })

      }

      addList() {
          this.setState({
              List: []
          })
      }

    render() {
        return (
            <div>
                <FormPageInput
                    data={this.state}
                    handleChange={this.handleChange}>

                </FormPageInput>
                <FormList
                    data={this.state}>

                </FormList>
            </div>
        )
    }
}

export default FormPage;