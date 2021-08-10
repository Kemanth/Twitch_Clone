import React from "react";
import { fetchStream, updateStream } from "../../actions";
import { connect } from "react-redux";
import StreamForm from "./StreamForm";
import * as _ from 'lodash';

class StreamEdit extends React.Component{

    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.fetchStream(id);
    }

    onSumbit = (formValues) => {
        const id = this.props.match.params.id;
        this.props.updateStream(id, formValues)
    }

    render(){
        return(
            <div>
                <h2>Edit the Stream</h2>
                <StreamForm onSubmit = {this.onSumbit} initialValues = {_.pick(this.props.stream, 'title', 'description')}/>
            </div>
        );
    }
}

const mapStateToProps = (store, ownProps) => {
    const id = ownProps.match.params.id;
    return {
        stream : store.streams[id],
    }
}

export default connect(mapStateToProps, {fetchStream, updateStream})(StreamEdit);