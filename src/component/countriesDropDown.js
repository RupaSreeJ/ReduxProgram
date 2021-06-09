import React, { Component } from 'react'
import { getCountries } from "../action/action-axios"
import { connect } from 'react-redux';
import Data from '../mock/MockData'

 class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown1: [],
            dropdown2: [],
            select: ''
        };
    }

    componentDidMount() {
        this.setCountries(this.props.countries[0]);
    }
    static getDerivedStateFromProps(nextProps,prevProps) {   
        if (prevProps.result !== nextProps.result) {
            return{
                dropdown2: nextProps.result,
                select: nextProps.name
            };
        }
    }
    setCountries(name) {
        this.props.getCountries(name);
        if (this.props.result) {
             this.setState({
                dropdown2: this.props.result,
            }); 
        }
    }

    handleOnChange(e) {
        e.preventDefault();
        this.setCountries(e.target.value);
    }

    render() {
        return (
            <div>
                <select value={this.state.select} onChange={this.handleOnChange.bind(this)}>
                    {
                        this.props.countries.map(x => {
                            return <option key={x}>{x}</option>
                        })
                    }
                </select><br/><br/>
                <div>
                    <select >                           
                        {
                            this.props.result.map(x => {
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
        result: state.countriesReducer.result,
        loading: state.countriesReducer.loading,
        error: state.countriesReducer.error,
    };
};

 const mapDispatchProps = (dispatch) => ({
    getCountries: (name) => dispatch(getCountries(name))
}); 
export default connect(mapStateToProps, mapDispatchProps)(DropDown);

 
