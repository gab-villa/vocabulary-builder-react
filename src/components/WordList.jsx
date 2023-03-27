import ListGroup from "react-bootstrap/ListGroup";
import { WordItem } from "./WordItem";

export const WordList = ({wordList}) =>
{
    return (<>
        <ListGroup className="text-center">
            <WordItem itemData={wordList[2]}/>
            <WordItem itemData={wordList[1]}/>
            <WordItem itemData={wordList[0]}/>
        </ListGroup>
    </>);
}