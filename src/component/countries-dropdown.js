import React, { Component } from 'react'
import { actionCreator } from "../action/action-axios"
import { connect } from 'react-redux';
import Data from '../mock/MockData'

export class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown1: [],
            dropdown2: [],
            selectdd: ''
        };
    }

    componentDidMount() {
        this.setCountries(this.props.countries[0]);
        this.setState({
            dropdown1: this.props.countries,
            dropdown2: this.props.result
        });
    }
    componentWillReceiveProps(nextProps) {
        if (this.state.result !== nextProps.result) {
            this.setState({
                dropdown2: nextProps.result,
                selectdd: nextProps.name
            });
        }
    }
    setCountries(name) {
        this.props.actionCreator(name);
        if (this.props.result) {
            this.setState({
                dropdown2: this.props.result,
            });
        }
    }

    selectChange(e) {
        e.preventDefault();
        this.setCountries(e.target.value);
    }

    //handleOnChange(e) {
    //}

    render() {
        return (
            <div>
                <select value={this.state.selectdd} onChange={this.selectChange.bind(this)}>
                    {
                        this.state.dropdown1.map(x => {
                            return <option key={x}>{x}</option>
                        })
                    }
                </select><br/><br/>
                <div>
                    <select >                           {/* onChange={this.handleOnChange.bind(this)} */}
                        {
                            this.state.dropdown2.map(x => {
                                return <option>{x.name}</option>
                            })
                        }
                    </select>
                </div>
            </div>
        )
    }
}

DropDown.defaultProps = Data;
const mapStateToProps = (state) => {
    return {
        result: state.event.result,
        loading: state.event.loading,
        error: state.event.error,
    };
};

const mapDispatchProps = (dispatch) => ({
    actionCreator: (name) => dispatch(actionCreator(name))
});
export default connect(mapStateToProps, mapDispatchProps)(DropDown);

 
