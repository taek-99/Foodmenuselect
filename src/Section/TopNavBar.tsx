import { Navbar, Nav, } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

function TopNavBar() {
    return (
        <Navbar expand='lg' bg='secondary' variant='dark'>
            <Container>
                <Navbar.Brand href='/'>밥메추</Navbar.Brand>
                <Nav className='ms-auto'>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/login'>Login</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default TopNavBar