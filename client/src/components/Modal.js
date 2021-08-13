import React from "react";

class Modal extends React.Component{

    render(){

        const {title, renderContent, renderActions, onDismiss} = this.props;

        return(
            <div onClick = {onDismiss} className = "modal__background">
                <div onClick = { e => e.stopPropagation()} className = "modal">
                    <h2 className = "modal__title">{title}</h2>
                    <div className = "modal__body">{renderContent()}</div>
                    <div className = "modal_actions">{renderActions()}</div>
                </div>
            </div>
        );
    }
}

export default Modal;