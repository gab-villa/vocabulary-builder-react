import { WordList} from "./components/WordList.jsx";
import { OptionsOfQuestion } from "./components/OptionsOfQuestion.jsx";
import { LayoutContainer} from "./components/LayoutContainer.jsx";
import { LayoutRow} from "./components/LayoutRow.jsx";

// app should be used for auth and routing

import React,{useState,useEffect} from 'react';
const PATH_TO_WORDLIST = "WordList-21-03-2023.json";
const TAM_WORDLIST = 10;
const NUMBER_OF_OPTIONS = 3;

function App() {
  const [dataList, setDataList] = useState();

  const handleOptClick = {};
  {
    handleOptClick.ans = () =>
    {
      console.log("opc correcta");
      let temp = dataList.slice();
      temp.shift();
      setDataList(temp);
    }
    handleOptClick.wrong = () =>
    {
      console.log("opc equivocada");
      let temp = dataList.slice();
      let delElem = temp.shift();
      temp.push(delElem);
      setDataList(temp);
    }
  }

  useEffect(() =>{
    function getArrOfRandomInt(cantInt, max)
    {
      let randIntArray = [], randNum;
      while(randIntArray.length < cantInt)
      {
        randNum = Math.round(Math.random() * max) + 1;
        //si no se encontro en el array
        if(randIntArray.indexOf(randNum) === -1) 
        {
          randIntArray.push(randNum);
        }
      }
      return randIntArray;
    }
    async function getData(dataList)
    {
        const res = await fetch(PATH_TO_WORDLIST, {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        });
        const data = await res.json();

        const tamArrRand = TAM_WORDLIST * NUMBER_OF_OPTIONS;
        let arrRandomIndex = getArrOfRandomInt(tamArrRand,data.length-1);
        let arrTemp = [];
        
        for(let i = 0;i < tamArrRand;i += NUMBER_OF_OPTIONS)
        {	
          arrTemp.push({
            ans: data[arrRandomIndex[i]],
            wr1: data[arrRandomIndex[i+1]], 
            wr2: data[arrRandomIndex[i+2]] 
          });
        }
        setDataList(arrTemp);
    }
    getData();
  }, [])
  if(!dataList || dataList.length == 0)
  {
    return null;
  }
  return (
    <LayoutContainer>
      <LayoutRow>
        <WordList wordList={dataList.slice(0,3)}/>
      </LayoutRow>
      <LayoutRow>
        <OptionsOfQuestion optList={dataList[0]}
                           onOptClick={handleOptClick}/>
      </LayoutRow>
    </LayoutContainer>
  );
}

export default App
