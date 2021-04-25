import React, { Component } from 'react'

export default class Contact extends Component {

    constructor(props){
        super (props);
        this.state = {
            name : "",
            email : "",
            phone : "",
            message : "",
        }
    }


    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    clickHandler = (e) =>{
        e.preventDefault();
        console.log(this.state);

        if(!this.state.name || !this.state.email || !this.state.phone || !this.state.message){
            alert("Required to fill all the form fields");
        } else {
	    window.open(`https://wa.me/918750303073?text=Hello I am ${this.state.name} %0aEmail: ${this.state.email} %0aContact For: ${this.state.message} %0aThank Your!`, '_blank');
        }

    }


    render() {
        return (
            <>
            <div className="text-center mt-5">
                <h1>Get In Touch</h1>
            </div>
            <div className="row container">
                <div className="col-lg-6">
                    <h2 className="mt-5">DON'T BE SHY</h2>
                    <p>Fell free to get in touch with me. I am always open to discussing new projects. Creative ideas or opportunities to be part of your visions.</p>

                </div>

                <div className="col-lg-6">
                    <form className="mt-5">
                        <div className="form-group">
                            <input type="text" name="name" className="form-control" onChange={(e) =>this.changeHandler(e)} placeholder="Your Name" required=""/>
                        </div>

                        <div className="form-group">
                            <input type="text" name="email" className="form-control" onChange={(e) =>this.changeHandler(e)} placeholder="Your Email" required=""/>
                        </div>
                        
                        <div className="form-group">
                            <input type="tel" name="phone" className="form-control" onChange={(e) =>this.changeHandler(e)} placeholder="Your Phone" required=""/>
                        </div>

                        <div className="form-group">
                        <textarea name="message" className="form-control" rows="3" required="" onChange={(e) =>this.changeHandler(e)} placeholder="Your Message"></textarea>
                        </div>

                    <button type="submit" className="btn btn-success"  onClick={(e) => this.clickHandler(e)} ><i className="fab fa-whatsapp"></i> Send WhatsApp </button>
                    </form>
                </div>
            </div>

        </>
        )
    }
}
