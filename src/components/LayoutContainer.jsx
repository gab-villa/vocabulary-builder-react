import Container from 'react-bootstrap/Container';

export const LayoutContainer = ({children}) =>
{
    return (
        <Container className = "vh-100 px-0" fluid>
            {children}
        </Container>
    );
}