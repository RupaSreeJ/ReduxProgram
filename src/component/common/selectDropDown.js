import React, { Component } from 'react'
class CommonDropDown extends Component {
render() {
        const dropDownList= this.props.dropDownList
        return (
            <div>
                <select  onChange={this.props.onChange} id={this.props.id}>
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

export default CommonDropDown

