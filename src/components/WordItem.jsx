import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

export const WordItem = () =>
{
    return (<>
        <ListGroup.Item>
            word<Badge bg="primary">lvl</Badge>
        </ListGroup.Item>
    </>);
}