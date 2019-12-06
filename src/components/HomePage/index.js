import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Button from '../../components/button'

class HomePage extends Component{

  render(){
    return(
      <div className="App">

<Link to="/login">
  <Button renderAs="button" label="Login">
  </Button>
</Link>
  <Link to="register">
  <Button renderAs="button" label="Register">
  </Button>
</Link>

<Link to="/dashboard">
  <Button renderAs="button" label="dashboard">
  
  </Button>
</Link>

      </div>
    )
  }
}

export default HomePage;
