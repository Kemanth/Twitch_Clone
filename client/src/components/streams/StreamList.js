import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component{

    componentDidMount(){
        this.props.fetchStreams();
    }

    renderStreamList = () => {
        return this.props.streams.map((stream) => {
            return (
                <div key = {stream.id}>
                    <h3>{stream.title}</h3>
                    <p>{stream.description}</p>
                    {this.renderEditDeleteButtons(stream.userId, stream.id)}
                </div>
            );
        });
    } 

    renderEditDeleteButtons = (streamUserId, id) => {
        const {userId} = this.props;
        let editPath = `/streams/edit/${id}`;
        let deletePath = `/streams/delete/${id}`;
        if(userId === streamUserId){
            return (
                <div>
                    <Link to = {editPath}><button>Edit</button></Link>
                    <Link to = {deletePath}><button>Delete</button></Link>
                </div>
            );
        }
    }

    renderCreateStreamButton = () => {
        if(this.props.isSignedIn){
            return (
                <div>
                    <Link to="/streams/new">Create Stream</Link>
                </div>
            );
        }
    }

    render(){
        return (
            <div>
                {this.renderStreamList()}
                {this.renderCreateStreamButton()}
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        isSignedIn : store.auth.isSignedIn,
        userId : store.auth.userId, 
        streams : Object.values(store.streams)
    }
}

export default connect(mapStateToProps,{fetchStreams})(StreamList);