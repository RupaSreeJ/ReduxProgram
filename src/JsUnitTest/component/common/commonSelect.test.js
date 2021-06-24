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
    onChange :fn => fn,
    handleOnChange: fn => fn,
  }
  it('renders three <commonSelect/> components', () => {
    const wrapper = shallow(<CommonSelect {...props} />);
    expect(wrapper.contains(<CommonSelect/>)).toEqual(false);
});
it('should call handleOnChange method', () =>
{
    const wrapper = shallow(<CommonSelect {...props}/>);
    expect(wrapper.find(`select`).simulate('change', {preventDefault: fn => fn,target: {name: "Africa"}}));
   expect(wrapper.props('handleOnChange')).toEqual('Africa');
}); 
});
