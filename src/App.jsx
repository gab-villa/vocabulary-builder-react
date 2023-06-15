import { WordList} from "./components/WordList.jsx";
import { OptionsOfQuestion } from "./components/OptionsOfQuestion.jsx";
import { LayoutContainer} from "./components/LayoutContainer.jsx";
import { LayoutRow} from "./components/LayoutRow.jsx";
import { CurrentProgress } from "./components/ProgressBar";
import { FailMsg } from "./components/FailMsg.jsx";
import * as Const from './Constants.jsx';
// app should be used for auth and routing

import React,{useState,useEffect} from 'react';
import { SuccessMsg } from "./components/SuccessMsg.jsx";

function App() {
  const [contErr, setContErr] = useState(0);
  const [dataList, setDataList] = useState([]);
  const [contAns, setContAns] = useState(0);

  const handleOptClick = {};
  {
    handleOptClick.ans = () =>
    {

      let temp = dataList.slice();
      temp.shift();
      setDataList(temp);

      setContAns(contAns+1);
    }
    handleOptClick.wrong = () =>
    {
      let temp = dataList.slice();
      let delElem = temp.shift();
      temp.push(delElem);
      setDataList(temp);
      setContErr(contErr+1);
    }
  }
  function handleRetry()
  {
    getData();
    setContErr(0);
    setContAns(0);
  }

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
  async function getData()
    {
        const res = await fetch(Const.PATH_TO_WORDLIST, {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        });
        const data = await res.json();

        const tamArrRand = Const.MAX_WORDLIST * Const.NUMBER_OF_OPTIONS;
        let arrRandomIndex = getArrOfRandomInt(tamArrRand,data.length-1);
        let arrTemp = [];
        
        for(let i = 0;i < tamArrRand;i += Const.NUMBER_OF_OPTIONS)
        {	
          arrTemp.push({
            ans: data[arrRandomIndex[i]],
            wr1: data[arrRandomIndex[i+1]], 
            wr2: data[arrRandomIndex[i+2]] 
          });
        }
        setDataList(arrTemp);
    }
  useEffect(() =>{
    getData();
  }, [])
  
  if(contErr >= Const.MAX_CANT_ERRORES)
  {
    return (<>
      <FailMsg totalAns={contAns} handleRetry={handleRetry}/>
    </>);
  }
  else if(contAns >= Const.MAX_WORDLIST)
  {
    return (<>
      <SuccessMsg totalErr={contErr} handleRetry={handleRetry}/>
    </>);
  }
  else if(!dataList || dataList.length == 0)
  {
    return null;
  }
  return (
    <LayoutContainer>
      <LayoutRow>
      <CurrentProgress curCount={contAns} contErr={contErr} />
        <WordList wordList={dataList.slice(0,
                  dataList.length < Const.TAM_WORDLIST ? 
                  dataList.length : Const.TAM_WORDLIST
                )}/>
      </LayoutRow>
      <LayoutRow>
        <OptionsOfQuestion optList={dataList[0]}
                          onOptClick={handleOptClick}/>
      </LayoutRow>
    </LayoutContainer>
  );
}

export default App
