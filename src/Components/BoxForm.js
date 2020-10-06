import React, { Component } from 'react';
import Box from './Box';

class BoxForm extends Component {

    state = {
        width : '',
        height : '',
        bgColor : '',
        cBox : []
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }

    handleSubmit = (evt) => {

        evt.preventDefault();

        let boxObj = {
            width : this.state.width,
            height : this.state.height,
            bgColor : this.state.bgColor
        }

        let addAnewBox = [...this.state.cBox, boxObj];

        this.setState({
            width : '',
            height : '',
            bgColor : '',
            cBox : addAnewBox
        })

    }

    remove = (ind) => {
        let cBoxCopy = [...this.state.cBox];
        cBoxCopy.splice(ind,1);
        this.setState({
            cBox : cBoxCopy
        })
    }

    render() {
        return (
            <div className="BoxForm">
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor="width">Width : </label>
                        <input type="text" name="width" value={this.state.width} onChange={this.handleChange} required />
                    </p>
                    <p>
                        <label htmlFor="height">Height : </label>
                        <input type="text" name="height" value={this.state.height} onChange={this.handleChange}  required />
                    </p>
                    <p>
                        <label htmlFor="bgColor">BackgroundColor : </label>
                        <input type="text" name="bgColor" value={this.state.bgColor} onChange={this.handleChange} required />
                    </p>
                    <button type="submit">Add A New Box !!!</button>
                </form>
                <div className="Box-Wrapper">
                    {this.state.cBox.length <= 0 && <h3>Create Your First Color Box 😀😀😀 !!!</h3>}
                    {this.state.cBox.length > 0 && this.state.cBox.map((box, ind) => <Box width={box.width} height={box.height} bgColor={box.bgColor} ind={ind} remove={() => this.remove(ind)} />)}
                </div>
            </div>
        );
    }
}

export default BoxForm;