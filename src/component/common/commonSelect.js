import React, { Component } from 'react'
class CommonSelect extends Component {
    handleOnChange(e) {
        e.preventDefault();
        this.props.onChange(e.target.value);
    }
render() {
        const dropDownList= this.props.dropDownList
        return (
            <div>
                <select  onChange={(e)=>this.handleOnChange(e)} id={this.props.id}>
                {
                   dropDownList.map(x => {
                    return <option>{x.name}</option>
                  })
                }
                </select>
            </div>
        )
    }
}

export default CommonSelect

