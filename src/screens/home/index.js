import React, { useState } from 'react'

const Modal = (props) => {

    const height = props.modalDetails.height < 30 ? '30' : props.modalDetails.height > 100 ? '100' : props.modalDetails.height
    const width = props.modalDetails.width < 30 ? '30' : props.modalDetails.width > 100 ? '100' : props.modalDetails.width

    return <div id="myModal" class="modal" style={{height: `${height}%`, width: `${width}%`}}>
        <div class="modal-content">
            <div class="modal-header" style={{backgroundColor: props.modalDetails.backgroundColor, color: props.modalDetails.color}}>
                <span class="close">&times;</span>
                <h2>{props.modalDetails.title}</h2>
            </div>
            <div class="modal-body" style={{height: `${height/1.25}vh`}}>
                {props.modalDetails.body}
            </div>
            <div class="modal-footer" style={{backgroundColor: props.modalDetails.backgroundColor, color: props.modalDetails.color}}>
                <button type="button" class="btn btn-default close-modal" data-dismiss="modal">{props.modalDetails.buttonName}</button>
            </div>
        </div>
    </div>
}

const ModalCustomizationForm = (props) => {
    return <div>
        <h3>Modal Customization</h3>
        <div class="container">
            <form>
                <div class="row">
                    <div class="col-25">
                        <label for="title">Title</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="title" name="title" defaultValue={props.modalDetails.title} onChange={props.onChange} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="body">Body</label>
                    </div>
                    <div class="col-75">
                        <textarea id="body" className="textarea-height" name="body" defaultValue={props.modalDetails.body} onChange={props.onChange}></textarea>
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="buttonName">Exit Button Name</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="buttonName" name="buttonName" defaultValue={props.modalDetails.buttonName} onChange={props.onChange} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="height">Height</label>
                    </div>
                    <div class="col-75">
                        <input type="number" id="height" name="height" min={30} max={100} defaultValue={props.modalDetails.height} onChange={props.onChange} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="width">Width</label>
                    </div>
                    <div class="col-75">
                        <input type="number" min={30} max={100} id="width" name="width" defaultValue={props.modalDetails.width} onChange={props.onChange} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="backgroundColor">Background Color</label>
                    </div>
                    <div class="col-75">
                        <input type="color" id="backgroundColor" name="backgroundColor" defaultValue={props.modalDetails.backgroundColor} onChange={props.onChange} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="color">Color</label>
                    </div>
                    <div class="col-75">
                        <input type="color" id="color" name="color" defaultValue={props.modalDetails.color} onChange={props.onChange} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="form-button"></label>
                    </div>
                    <div class="col-75">
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
