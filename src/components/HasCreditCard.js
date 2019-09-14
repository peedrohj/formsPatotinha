import React, { Component } from 'react'
import Typist from 'react-typist'
import './../App.css';

export class HasCreditCard extends Component {
    render() {
        return (
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ flex: 1, marginTop: 42 }}>
                    <h1>
                        <Typist>Você possui cartão de crédito próprio?</Typist>
                    </h1>
                </div>
                <div style={{ flex: 1, flexDirection: "row", display: "flex" }}>
                    <div onClick={() => this.props.onClick(false)} className="Button" style={{ flex: 1, padding: 50, margin: 100, border: "1px solid #e91e63" }}>
                        <h1 style={{ color: "#e91e63" }}>Não</h1>
                    </div>
                    <div onClick={() => this.props.onClick(true)} className="Button" style={{ flex: 1, padding: 50, margin: 100, border: "1px solid #2196f3" }}>
                        <h1 style={{ color: "#2196f3" }} >Sim</h1>
                    </div>
                </div>

            </div>
        )
    }
}

export default HasCreditCard
