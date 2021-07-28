import React from "react";

class GoogleAuth extends React.Component{
    state = {isSignedIn : null};
    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId : 
                '537375197328-vjskseoaeq82cdjb8jhnulor01boosj2.apps.googleusercontent.com',
                scope : 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn : this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChnage);
            });
        })
    }

    onAuthChnage = () => {
        this.setState({isSignedIn : this.auth.isSignedIn.get()});
    }

    renderAuthButton = () => {
        if(this.state.isSignedIn === null){
            return <div>Not Sure</div>
        }
        else if(this.state.isSignedIn === true){
            return <div>Signed In</div>
        }
        else{
            return <div>Not Signed In</div>
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

export default GoogleAuth;