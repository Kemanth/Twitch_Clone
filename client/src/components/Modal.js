import React from "react";

class Modal extends React.Component{

    render(){

        const {title, renderContent, renderActions, onDismiss} = this.props;

        return(
            <div onClick = {onDismiss}>
                <div onClick = { e => e.stopPropagation()}>
                    <h2>{title}</h2>
                    <div>{renderContent()}</div>
                    <div>{renderActions()}</div>
                </div>
            </div>
        );
    }
}

export default Modal;