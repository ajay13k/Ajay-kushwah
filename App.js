
import 'bootstrap/dist/css/bootstrap.css';
import Employee from './component/Employee'
import { Route,Switch} from 'react-router-dom';
import About from './component/common/About';
import Contect from './component/common/Contect';
import Error from './component/common/Error';
import Navbar from './component/common/Navbar';
import Attendance from './component/service/Attendance';
import Edit from './component/service/Edit';
let App = () => {

  return (<div>
    <h2>Employee Details</h2>
    <Navbar/>

    <Switch>
    <Route exact path='/' component = {About} />
     <Route path='/contact' component = {Contect} />
     <Route path='/employee' component = {Employee} />
     <Route path='/attendance' component = {Attendance} />
     <Route path='/edit' component = {Edit} />
      {/* <Redirect from='/' exact to='contacts' /> */}
      <Route component={Error}/>
    </Switch>
    {/* <Employee/> */}
  </div>);
};
export default App;