import Container from 'react-bootstrap/Container';

export const LayoutContainer = ({children}) =>
{
    return (
        <Container className = "bg-secondary vh-100 px-0" fluid>
            {children}
        </Container>
    );
}