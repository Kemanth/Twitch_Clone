import React from "react";
import { fetchStream } from "../../actions";
import { connect } from "react-redux";
import FlvJs from "flv.js";

class StreamShow extends React.Component {

    constructor (props) {
        super(props)
        this.videoRef = React.createRef();
    }

    componentDidMount () {
        const {id} = this.props.match.params;
        this.props.fetchStream(id);
    }

    render(){

        if(!this.props.stream){
            return <div>Loading ...</div>
        }

        const {title, description} = this.props.stream;

        return(
            <div>
                <video ref = {this.videoRef}/>
                <h2>{title}</h2>
                <h3>{description}</h3>
            </div>
        );
    }
}

const mapStateToProps = (store, ownProps) => {
    return {
        stream : store.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchStream})(StreamShow);