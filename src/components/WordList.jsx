import ListGroup from "react-bootstrap/ListGroup";
import { WordItem } from "./WordItem";

export const WordList = () =>
{
    return (<>
        <ListGroup>
            <WordItem />
            <WordItem />
            <WordItem />
        </ListGroup>
    </>);
}