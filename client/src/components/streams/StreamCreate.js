import React from "react";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";
import { connect } from "react-redux";

class StreamCreate extends React.Component{

    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    }

    render(){
        return (
            <div>
                <h2>Stream Create</h2>
                <StreamForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

export default connect(null, {createStream})(StreamCreate);