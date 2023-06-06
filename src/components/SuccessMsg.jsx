import { LayoutContainer} from "./LayoutContainer.jsx";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
export const SuccessMsg = ({totalErr, handleRetry}) =>
{
    return (
    <LayoutContainer>
        <Row className = "justify-content-center align-items-center h-100 mx-0 ">
            <Col className="text-center" sm="4">
                <div className="text-white">
                    <h1>Success!</h1>
                    <p>You have passed the quiz with {totalErr} mistakes!</p>
                </div>
            <Button onClick={handleRetry} variant="primary">Try Again</Button>
            </Col>
        </Row>
    </LayoutContainer>
    );
}