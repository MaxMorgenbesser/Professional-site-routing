import { Button, Nav } from "react-bootstrap"
import { Link } from 'react-router-dom';





const Navbar = () =>{

    return (<>
        {/* <Button>BootStrap button </Button> */}
        <Nav 
            activeKey="/home"
            id='Nav'
          >
            <Nav.Item>
              <Nav.Link as = {Link} to ='/'>About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link as = {Link} to ='/projects'>Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link as = {Link} to ='/skills'>Skills
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link as = {Link} to ='/resume'>Resume
              </Nav.Link>
            </Nav.Item>
          </Nav></>)
}

export default Navbar