import React, {Component} from 'react';
import { Link } from 'react-router-dom'
// import Button from '../../components/button'
import Layout from '../../components/Layout'

class HomePage extends Component{

  render(){
    return(
      <Layout>

<Link to="/login" className="btn ">
Login
</Link>
  <Link to="register">
Register
</Link>

<Link to="/dashboard">
Dashboard  
</Link>

      </Layout>
    )
  }
}

export default HomePage;
