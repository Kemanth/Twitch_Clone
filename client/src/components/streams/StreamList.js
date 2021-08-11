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
            let showPath = `/streams/show/${stream.id}`;
            return (
                <div key = {stream.id} className = "card">
                    <Link to = {showPath} className = "card__heading">{stream.title}</Link>
                    <p className = "card__details">{stream.description}</p>
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
                    <Link to = {editPath} className = "card__btn-edit">Edit</Link>
                    <Link to = {deletePath} className = "card__btn-delete">Delete</Link>
                </div>
            );
        }
    }

    renderCreateStreamButton = () => {
        if(this.props.isSignedIn){
            return (
                <div className = "streamList__create">
                    <Link to="/streams/new">Create Stream</Link>
                </div>
            );
        }
    }

    render(){
        return (
            <div>
                {this.renderCreateStreamButton()}
                <div className = "streamList">
                    {this.renderStreamList()}
                </div>
                
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