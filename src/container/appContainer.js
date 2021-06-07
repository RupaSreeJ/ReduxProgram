 import {connect} from 'react-redux';
import App from '../component/App'
const mapStateToProps=state=>({
    getSelectedValue: state.event.selectValue,
   
 });
export default connect(mapStateToProps)(App); 