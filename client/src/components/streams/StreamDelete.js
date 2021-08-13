
import React from "react";
import Modal from "../Modal";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import history from "../../history";

class StreamDelete extends React.Component{

    componentDidMount () {
        const {id} = this.props.match.params;
        this.props.fetchStream(id)
    }

    renderContent = () => {
        if(this.props.stream){
            return(`Do you want to delete the stream with title ${this.props.stream.title}`);
        }
        else{
            return(`Do you want to delete this stream`);
        }
    }

    renderActions = () => {
        const {id} = this.props.match.params;
        return (
            <div className = "streamDelete_actions">
                <button onClick = {() => this.props.deleteStream(id)} className = "streamDelete__actions__btn">Delete</button>
                <button onClick = {this.onDismiss} className = "streamDelete__actions__btn">Close</button>
            </div>
        );
    }

    onDismiss = () => {
        history.push('/');
    }

    render(){
        return(
            <Modal
                title = 'Delete Stream'
                renderContent = {this.renderContent}
                renderActions = {this.renderActions}
                onDismiss = {this.onDismiss}
            />
        )
    }
}

const mapStateToProps = (store, ownProps) => {
    return {
        stream : store.streams[ownProps.match.params.id]
    }
} 

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);