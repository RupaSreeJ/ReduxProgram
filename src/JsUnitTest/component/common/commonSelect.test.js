import { shallow } from "enzyme";

import CommonSelect from '../../../component/common/commonSelect';


describe('<commonSelect/>', () => {
  let props = {
    dropDownList:[{id: "countryDropDown"}],
    Data:
    {
      heading: "Countries App",
      countries: [
        {
          id: "africa",
          name: "Africa"
        },
        {
          id: "americas",
          name: "Americas"
        },
        {
          id: "asia",
          name: "Asia"
        },
        {
          id: "europe",
          name: "Europe"
        }]
    },
    value :fn => fn
  }
  it('renders three <commonSelect/> components', () => {
    const wrapper = shallow(<CommonSelect {...props} />);
    expect(wrapper).toBeDefined();
});
it('should call handleOnChange method', () =>
{
    const value = {
        preventDefault: fn => fn
    }
    const wrapper = shallow(<CommonSelect {...props}/>);
    wrapper.instance().handleOnChange(value);
   expect(wrapper.props('handleOnChange')).toEqual('value');
}); 
// it('renders inputfield for handleonchange', () => {
    
//   const wrapper = shallow(<CommonSelect {...props}/> );
//   expect(wrapper.find(`[id="some text"]`).at(0).simulate('change', {target: {value: "Hello Added"}}));
  
// });
});