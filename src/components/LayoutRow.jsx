import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const LayoutRow = ({children}) =>
{
    return (
        <Row className = "justify-content-center align-items-center h-50">
            <Col md="auto">
                {children}
            </Col>
        </Row>
    );
}
