import React, { Component } from 'react'

export default class HandleEvent extends Component {
    showMess = () => {
        alert('hello');
    }
    showInfo = (info) => {
        alert(info);
    }
    render() {
        const title = "cybersoft";
        return (
            <div>
                <button className="btn-danger btn" onClick={this.showMess}>Click me</button>
                <button onClick={
                    () => {
                        alert(`hello ${title}`);
                    }
                }>
                    Show message
                </button>
                <button onClick={()=>{
                    this.showInfo('hello fe54');
                }}>
                    Show info
                </button>
                {/* Cách sử dùng hàm bind - ít dùng */}
                <button onClick={this.showInfo.bind(this,'hello cyberfe54')}>
                    Show info
                </button>
            </div>
        )
    }
}
