import React from "react";
import { fetchStream, updateStream } from "../../actions";
import { connect } from "react-redux";

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
        return(<div>edit</div>);
    }
}
export default connect(null, {fetchStream, updateStream})(StreamEdit);