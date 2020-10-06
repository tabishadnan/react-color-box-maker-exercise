import React, { Component } from 'react';

class Box extends Component {

    handleRemove = (ind) => {
        this.props.remove(ind);
    }

    render() {
        return (
            <div className="Box">
                <p>Box Width : {this.props.width} || Box Height : {this.props.height}</p>
                <div className="box-wrapper">
                    <div className="cbox" style={{backgroundColor: this.props.bgColor, width: `${this.props.width}px`, height: `${this.props.height}px`}}>
                        
                    </div>
                    <button onClick={() => this.handleRemove(this.props.ind)}>Remove Box !!!</button>
                </div>
            </div>
        );
    }
}

export default Box;