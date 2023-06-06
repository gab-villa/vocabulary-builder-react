import ListGroup from "react-bootstrap/ListGroup";
import { WordItem } from "./WordItem.jsx";

export const WordList = ({wordList}) =>
{
    const wengList = wordList.slice().reverse().map(word =>
        
        <WordItem key={word.ans.id} itemData={word.ans}/>

    );
    return (<>
        <ListGroup className="text-center">
            {wengList}
        </ListGroup>
    </>);
}