import React, { useState } from 'react'

const Modal = (props) => {

    const height = props.modalDetails.height < 30 ? '30' : props.modalDetails.height > 100 ? '100' : props.modalDetails.height
    const width = props.modalDetails.width < 30 ? '30' : props.modalDetails.width > 100 ? '100' : props.modalDetails.width

    return <div id="myModal" className="modal" style={{height: `${height}%`, width: `${width}%`}}>
        <div className="modal-content">
            <div className="modal-header" style={{backgroundColor: props.modalDetails.backgroundColor, color: props.modalDetails.color}}>
                <span className="close">&times;</span>
                <h2>{props.modalDetails.title}</h2>
            </div>
            <div className="modal-body" style={{height: `${height/1.25}vh`}}>
                {props.modalDetails.body}
            </div>
            <div className="modal-footer" style={{backgroundColor: props.modalDetails.backgroundColor, color: props.modalDetails.color}}>
                <button type="button" className="btn btn-default close-modal" data-dismiss="modal">{props.modalDetails.buttonName}</button>
            </div>
        </div>
    </div>
}

const ModalCustomizationForm = (props) => {
    return <div>
        <h3>Modal Customization</h3>
        <div className="container">
            <form>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="title">Title</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="title" name="title" defaultValue={props.modalDetails.title} onChange={props.onChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="body">Body</label>
                    </div>
                    <div className="col-75">
                        <textarea id="body" className="textarea-height" name="body" defaultValue={props.modalDetails.body} onChange={props.onChange}></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="buttonName">Exit Button Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="buttonName" name="buttonName" defaultValue={props.modalDetails.buttonName} onChange={props.onChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="height">Height</label>
                    </div>
                    <div className="col-75">
                        <input type="number" id="height" name="height" min={30} max={100} defaultValue={props.modalDetails.height} onChange={props.onChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="width">Width</label>
                    </div>
                    <div className="col-75">
                        <input type="number" min={30} max={100} id="width" name="width" defaultValue={props.modalDetails.width} onChange={props.onChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="backgroundColor">Background Color</label>
                    </div>
                    <div className="col-75">
                        <input type="color" id="backgroundColor" name="backgroundColor" defaultValue={props.modalDetails.backgroundColor} onChange={props.onChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="color">Color</label>
                    </div>
                    <div className="col-75">
                        <input type="color" id="color" name="color" defaultValue={props.modalDetails.color} onChange={props.onChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="form-button"></label>
                    </div>
                    <div className="col-75">
                        <button type="button" id="myBtn" className="form-button">Launch Modal</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
}

function Home() {

    const [formData, setFormData] = useState({
        title: "Modal Title Here",
        body: "Modal body here.....",
        buttonName: "Close",
        height: '100',
        width: '100',
        color: '#ffffff',
        backgroundColor: '#0b24fd'
    })
    
    const updateFormData = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <ModalCustomizationForm onChange={updateFormData} modalDetails={formData} />
            <Modal modalDetails={formData}/>
        </div>
    );
}

export default Home;
