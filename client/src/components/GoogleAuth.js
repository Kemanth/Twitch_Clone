
class GoogleAuth extends React.Component{
    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId : 
                '537375197328-vjskseoaeq82cdjb8jhnulor01boosj2.apps.googleusercontent.com',
                scope : 'email'
            });
        })
    }

    render() {
        return <div>GoogleAuth</div>
    }
}