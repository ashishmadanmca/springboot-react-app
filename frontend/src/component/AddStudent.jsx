import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import StudentDataService from '../service/StudentDataService';

class AddStudent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: -1,
            name: '',
            city: '',
            pincode: '',
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount() {
        console.log(this.state.id)
        if (this.state.id == -1) {
            return
        }
    }

    //Validates the inputs
    validate(values) {
        let errors = {}
        if (!values.name) {
            errors.name = '*Please enter name'
        } else if (!values.city) {
            errors.city = '*Please enter city'
        } else if (!values.pincode) {
            errors.pincode = '*Please enter pincode'
        }
        return errors
    }

    //Submit method for creating student
    onSubmit(values) {
        let student = {
            id: this.state.id,
            name: values.name,
            city: values.city,
            pincode: values.pincode
        }

        StudentDataService.createStudent(student)
            .then((response) => {
                console.log("Student created successfully..")
                alert("Student added");
                this.props.onCloseModel()
            }, (error) => {
                alert("Error Occured" + error);
            });

        console.log(values);
    }

    render() {
        let { id, name , city, pincode } = this.state
        return (
            <div>
                <div id="addStudentsContainer" className="container">
                    <h4 id="addStudentsTitle">Enter Student Details</h4>
                    <Formik
                        initialValues={{ id, name , city, pincode }}
                        onSubmit={this.onSubmit}
                        validateOnChange={true}
                        validateOnBlur={true}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Name</label>
                                        <Field className="form-control" type="text" name="name" />
                                        <ErrorMessage name="name" component="div"
                                                      className="alert alert-warning" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>City</label>
                                        <Field className="form-control" type="text" name="city" />
                                        <ErrorMessage name="city" component="div"
                                                      className="alert alert-warning" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Pincode</label>
                                        <Field className="form-control" type="text" name="pincode" />
                                        <ErrorMessage name="pincode" component="div"
                                                      className="alert alert-warning" />
                                    </fieldset>
                                    <button id="btnSave" className="" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default AddStudent;