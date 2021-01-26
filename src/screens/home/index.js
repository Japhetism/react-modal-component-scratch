import React, { useState } from 'react'
import Modal from '../../components/modal'

const ModalCustomizationForm = (props) => {
    
    const {
        title, 
        body, 
        buttonName, 
        backgroundColor, 
        color, 
        height, 
        width
    } = props.data

    return <div>
        <h3>Modal Customization</h3>
        <div className="container">
            <form>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="title">Title</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="title" name="title" defaultValue={title} onChange={props.onChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="body">Body</label>
                    </div>
                    <div className="col-75">
                        <textarea id="body" className="textarea-height" name="body" defaultValue={body} onChange={props.onChange}></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="buttonName">Exit Button Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="buttonName" name="buttonName" defaultValue={buttonName} onChange={props.onChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="height">Height</label>
                    </div>
                    <div className="col-75">
                        <input type="number" id="height" name="height" min={process.env.REACT_APP_MODAL_MINIMUM_HEIGHT_WIDTH} max={process.env.REACT_APP_MODAL_MAXIMUM_HEIGHT_WIDTH} defaultValue={height} onChange={props.onChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="width">Width</label>
                    </div>
                    <div className="col-75">
                        <input type="number" min={process.env.REACT_APP_MODAL_MINIMUM_HEIGHT_WIDTH} max={process.env.REACT_APP_MODAL_MAXIMUM_HEIGHT_WIDTH} id="width" name="width" defaultValue={width} onChange={props.onChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="backgroundColor">Background Color</label>
                    </div>
                    <div className="col-75">
                        <input type="color" id="backgroundColor" name="backgroundColor" defaultValue={backgroundColor} onChange={props.onChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="color">Color</label>
                    </div>
                    <div className="col-75">
                        <input type="color" id="color" name="color" defaultValue={color} onChange={props.onChange} />
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
            <ModalCustomizationForm onChange={updateFormData} data={formData} />
            <Modal data={formData}/>
        </div>
    );
}

export default Home;
