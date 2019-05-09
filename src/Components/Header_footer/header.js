import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button'


import { Link } from 'react-router-dom'


class Header extends Component {
  render() {
    return (
      <AppBar
        position='fixed'
          style={{
              backgroundColor:'#d97a7a',
              boxShadow: 'none',
              padding: '10px 0',
              borderBottom: '2px solid #f9foeb'
          }}
      
      
      
      >
        <Toolbar
            style = {{
              display: 'flex'
            }}>
            <div style ={{flexGrow:'1'}}>
              <div className='header_logo'>
                    Gina's Day Care
              </div>
            </div>


            <Link to="/Login">
              <Button color='inherit'>
                 Login

                  
              </Button>
            </Link>
            

            <Link to="/Register">
            <Button color='inherit'>
              Register
            
            </Button>
            </Link>


       </Toolbar>




      </AppBar>
    );
  }
}

export default Header;