import React, { Component } from 'react'
import { getCountries } from "../action/action-getCountries"
import { connect } from 'react-redux';
import CommonDropDown from './common/selectDropDown';
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
        this.setCountries(this.props.Content.countries[0].name);
        
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
                <CommonDropDown onChange={this.handleOnChange.bind(this)} dropDownList={this.props.Content.countries} id='regionDropDown'/>
                <br/>
                <CommonDropDown dropDownList={this.props.result} id='countryDropDown'/>
            </div>
        )
    }
}

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

 
