import ListGroup from "react-bootstrap/ListGroup";
import { WordItem } from "./WordItem.jsx";
//import { useState } from "react";

export const WordList = ({wordList}) =>
{
    return (<>
        <ListGroup className="text-center">
            <WordItem itemData={wordList[2].ans}/>
            <WordItem itemData={wordList[1].ans}/>
            <WordItem itemData={wordList[0].ans}/>
        </ListGroup>
    </>);
}