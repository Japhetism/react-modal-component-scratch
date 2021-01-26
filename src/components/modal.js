import React from 'react'

const Modal = (props) => {

    let { 
        height, 
        width, 
        title, 
        backgroundColor, 
        color, 
        buttonName, 
        body 
    } = props.data

    height = height < JSON.parse(process.env.REACT_APP_MODAL_MINIMUM_HEIGHT_WIDTH) ? JSON.parse(process.env.REACT_APP_MODAL_MINIMUM_HEIGHT_WIDTH) 
            : height > JSON.parse(process.env.REACT_APP_MODAL_MAXIMUM_HEIGHT_WIDTH) ? JSON.parse(process.env.REACT_APP_MODAL_MAXIMUM_HEIGHT_WIDTH) 
            : height

    width = width < JSON.parse(process.env.REACT_APP_MODAL_MINIMUM_HEIGHT_WIDTH) ? JSON.parse(process.env.REACT_APP_MODAL_MINIMUM_HEIGHT_WIDTH) 
            : width > JSON.parse(process.env.REACT_APP_MODAL_MAXIMUM_HEIGHT_WIDTH) ? JSON.parse(process.env.REACT_APP_MODAL_MAXIMUM_HEIGHT_WIDTH) 
            : width

    return <div id="myModal" className="modal" style={{height: `${height}${process.env.REACT_APP_PERCENTAGE_SYMBOL}`, width: `${width}${process.env.REACT_APP_PERCENTAGE_SYMBOL}`}}>
        <div className="modal-content">
            <div className="modal-header" style={{backgroundColor: backgroundColor, color: color}}>
                <span className="close">&times;</span>
                <h2>{title}</h2>
            </div>
            <div className="modal-body" style={{height: `${height/process.env.REACT_APP_MODAL_VIEW_POINT_HEIGHT}${process.env.REACT_APP_VIEW_POINT_HEIGHT_SYMBOL}`}}>
                {body}
            </div>
            <div className="modal-footer" style={{backgroundColor: backgroundColor, color: color}}>
                <button type="button" className="btn btn-default close-modal" data-dismiss="modal">{buttonName}</button>
            </div>
        </div>
    </div>
}

function ModalComponent(props) {
    
    const { data } = props
    
    return (
        <div>
            <Modal data={data}/>
        </div>
    );
}

export default ModalComponent;
