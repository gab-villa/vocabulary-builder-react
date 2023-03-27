import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

export const WordItem = ({itemData}) =>
{
    return (<>
        <ListGroup.Item>
            {itemData.weng}
            <Badge bg="primary">
                {itemData.level}
            </Badge>
        </ListGroup.Item>
    </>);
}