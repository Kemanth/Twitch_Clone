import React from "react";
import {Field, reduxForm} from 'redux-form';
import { connect } from "react-redux";

class StreamForm extends React.Component{

    renderError = ({error, touched}) => {
        if(touched && error)
            return (
                <div>{error}</div>
            );
    }

    renderInput = ({input, meta}) => {
        return (
            <div>
                <label>{input.name}</label>
                <input {...input}/>
                <div>{this.renderError(meta)}</div>
            </div>
        );
    }

    render(){
        return (
            <form onSubmit = {this.props.handleSubmit(this.props.onSubmit)}>
                <Field name = "title" component={this.renderInput}/>
                <Field name = "description" component={this.renderInput}/>
                <button>Submit</button>            
            </form>
        );
    }
}

const validate = (formValues) => {
    const error = {};

    if(!formValues.title){
        error.title = "Enter Title"
    }

    if(!formValues.description){
        error.description = "Enter Description"
    }

    return error;
}

const formWrapped =  reduxForm({form : 'StreamCreate', validate})(StreamForm);

export default connect(null, {StreamForm})(formWrapped);