import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const LayoutRow = ({children}) =>
{
    return (
        <Row className = "justify-content-center align-items-center h-50 mx-0">
            <Col className="text-center" sm="4">
                {children}
            </Col>
        </Row>
    );
}
