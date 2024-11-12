import React from 'react';
import { Button, Form, Alert } from 'react-bootstrap';

class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            name: '',
            email: '',
            telephone: '',
            message: ''
        };
    }

    onNameChange(event) {
        console.log(event.target.id);
        this.setState({[event.target.id]: event.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        fetch('http://localhost:3002/send', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          }).then(
          (response) => (response.json())
            ).then((response)=> {
          if (response.status === 'success') {
            console.log("Message Sent.");
            this.setState({successMessage:"Messaggio Inviato Correttamente"})
            this.resetForm()
          } else if(response.status === 'fail') {
            console.log("Message failed to send.")
            this.setState({errorMessage:"Messaggio non inviato. Riprova più tardi"})
          }
        }, 
        err => {
          console.log("Caso di errore");
          this.setState({errorMessage:"Il Servizio Contatti non è al momento disponibile. Riprova più tardi"})
        })
      }
    
      resetForm(){
        this.setState({name: "", email: "", telephone: "", message: ""})
      }

    render() {
        let message = "";
        if (this.state.errorMessage) {
          message =  <Alert key="error" variant="warning">{this.state.errorMessage}</Alert>
        } else if (this.state.successMessage) {
          message = <Alert key="success" variant="success">{this.state.successMessage}</Alert>
        }
        return (
            <div className="contact-us-form text-end" style={{paddingTop: "2rem"}}>
                <h3>CONTATTACI</h3>
                <Form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <Form.Group className="mb-3" >
                        <Form.Label>Nome e Cognome</Form.Label>
                        <Form.Control required type="text" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required type="email" id="email" value={this.state.email} onChange={this.onNameChange.bind(this)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control required type="number" id="telephone" value={this.state.telephone} onChange={this.onNameChange.bind(this)}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Messaggio</Form.Label>
                        <Form.Control required type="text" as="textarea" id="message" value={this.state.message} onChange={this.onNameChange.bind(this)} />
                    </Form.Group>

                    {/* <Alert key="success" variant="success">{this.state.successMessage}</Alert>
                    <Alert key="danger" variant="danger">{this.state.errorMessage}</Alert> */}
                    {message}

                    <Button variant="dark" type="submit">
                        Invia
                    </Button>
                </Form> 
            </div>
        );
    }
}

export default FormComponent;