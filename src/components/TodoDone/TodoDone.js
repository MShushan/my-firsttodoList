import Container from 'react-bootstrap/Container';
import {Navbar, Form } from 'react-bootstrap';

import {FaPencil} from 'react-icons/fa6'
import {FaBoxArchive} from 'react-icons/fa6'

export default function TodoDone (){
    return(
        <div>
            <Navbar className="bg-body-tertiary" style={{width:'900px', marginTop:'100px', marginLeft:'300px'}}> 
        <Container>
        <Form.Check
            inline
            label="Buy groceries for next week"
            name="group1"/>
    
          <Navbar.Brand href="#home">
           
            
            
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
                            <div >
                                <div >
                                    <div >
                                        <FaPencil/>
                                        <FaBoxArchive  />
                                    </div>
                                </div>
                                <div>
                                    
                                </div>
                            </div>
                        </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar className="bg-body-tertiary" style={{width:'900px', marginTop:'20px', marginLeft:'300px'}}> 
        <Container>
        <Form.Check
            inline
            label="Renew Car insurance"
            name="group1"/>
    
          <Navbar.Brand href="#home">
           
            
            
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
                            <div >
                                <div >
                                    <div >
                                        <FaPencil/>
                                        <FaBoxArchive  />
                                    </div>
                                </div>
                                <div>
                                    
                                </div>
                            </div>
                        </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar className="bg-body-tertiary" style={{width:'900px', marginTop:'20px', marginLeft:'300px'}}> 
        <Container>
        <Form.Check
            inline
            label="Sign up for online course"
            name="group1"/>
    
          <Navbar.Brand href="#home">
           
            
            
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
                            <div >
                                <div >
                                    <div >
                                        <FaPencil style={{marginLeft:'10px'}}/>
                                        <FaBoxArchive  />
                                    </div>
                                </div>
                                <div>
                                    
                                </div>
                            </div>
                        </Navbar.Collapse>
        </Container>
      </Navbar>
    
    
        </div>
    )
}

       