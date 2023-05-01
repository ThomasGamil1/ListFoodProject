import React, { useState } from 'react'
import { Container, Navbar, Row, Nav, Form} from 'react-bootstrap'

const NavBar = ({filterSearch}) => {

  const [SearchValue, setSearchValue] = useState('')

  const onSearch = ()=>{
    filterSearch(SearchValue)
    setSearchValue('')
  }
  return (
    <Row>
      <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="#">
        <div className='brand-color'>
        Al Akeel Restaurant
        </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="search..."
              className="mx-2"
              aria-label="Search"
              onChange={(e) =>setSearchValue(e.target.value)}
              value={SearchValue}
            />
            <button onClick={()=>onSearch()} className='btn-style' variant="outline-success">Search</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
    
  )
}

export default NavBar