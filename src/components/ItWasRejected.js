import React, { Component } from 'react'
import Typist from 'react-typist';
import {Container, Row, Col} from 'reactstrap';
import './../App.css';


export class ItWasRejected extends Component {
    render() {
        return (
            <Container style={{ textAlign: "center ", marginTop: "7%"}}>
                <Row>
                    <Col md={{ size: 12 }}>
                        <h1>
                            <Typist>Você foi rejeitado quando solicitou o seu primeiro cartão?</Typist>
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="6" sm="12">
                        <div onClick={() => this.props.onClick(false)} className="Button" style={{ flex: 1, padding: 30, marginTop: "10%", border: "1px solid #e91e63", borderRadius: "10px" }}>
                            <h1 style={{ color: "#e91e63" }}>Não</h1>
                        </div>
                    </Col>
                    <Col xs="12" md="6" sm="12">
                        <div onClick={() => this.props.onClick(true)} className="Button" style={{ flex: 1, padding: 30, marginTop: "10%", border: "1px solid #2196f3", borderRadius: "10px" }}>
                            <h1 style={{ color: "#2196f3" }} >Sim</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ItWasRejected
