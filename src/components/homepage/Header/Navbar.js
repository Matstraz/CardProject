import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    <>
      <Nav className="justify-content-center fw-bold fs-5 navigation" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home" className='text-dark'>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" className='text-dark'>Chart</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className='text-dark'>Nino</Nav.Link>
        </Nav.Item>
      </Nav>
      
    </>
  );
}

export default Navbar;