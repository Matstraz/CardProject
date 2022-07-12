import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home" className='hover-text-warning'>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Chart</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Nino</Nav.Link>
        </Nav.Item>
      </Nav>
      
    </>
  );
}

export default Navbar;