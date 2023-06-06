import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

function bgLevel(level)
{
    if(level == "A1" || level == "A2")
    {
        return "success";
    }
    else if(level == "B1")
    {
        return "warning";
    }
    else if(level == "B2")
    {
        return "danger";
    }
    return "dark"
}
export const WordItem = ({itemData}) =>
{
    
    return (<>
        <ListGroup.Item>
            {itemData.weng}
            <Badge className="mx-1" bg={bgLevel(itemData.level)}>
                {itemData.level}
            </Badge>
        </ListGroup.Item>
    </>);
}