import { WordList} from "./components/WordList.jsx";
import { OptionsOfQuestion } from "./components/OptionsOfQuestion.jsx";
import { LayoutContainer} from "./components/LayoutContainer.jsx";
import { LayoutRow} from "./components/LayoutRow.jsx";

// app should be used for auth and routing

import React,{useState,useEffect} from 'react';
const PATH_TO_WORDLIST = "/WordList-21-03-2023.json";
const TAM_WORDLIST = 50;
const NUMBER_OF_OPTIONS = 3;
function App() {
  const [dataList, setDataList] = useState();
  const [index, setIndex] = useState(0);

  function handleIndexClick()
  {
    setIndex(index+1);
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
    /*
    function shuffle(array){
      let i, j, temp;
      for (i = array.length - 1; i > 0; i--) {
        j = Math.round(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    }*/
    async function getData(dataList)
    {

        const res = await fetch(PATH_TO_WORDLIST);
        const data = await res.json();

        const tamArrRand = TAM_WORDLIST * NUMBER_OF_OPTIONS;
        let arrRandomIndex = getArrOfRandomInt(tamArrRand,data.length-1);
        let arrTemp = [[],[],[]];
        /*
        for(let i = 0;i < tamArrRand;i += NUMBER_OF_OPTIONS)
        {	
          arrTemp.push({
            ans: data[arrRandomIndex[i]],
            wr1: data[arrRandomIndex[i+1]], 
            wr2: data[arrRandomIndex[i+2]] 
          });
        }*/
        for(let i = 0;i < NUMBER_OF_OPTIONS;++i)
        {
          for(let j = 0;j < TAM_WORDLIST;++j)
          {
            arrTemp[i].push(data[arrRandomIndex[j+TAM_WORDLIST*i]]);
          }
        }
        setDataList({
          ans: arrTemp[0],
          wr1: arrTemp[1],
          wr2: arrTemp[2]
        });
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
        <WordList wordList={dataList.ans}/>
      </LayoutRow>
      <LayoutRow>
        <OptionsOfQuestion optList={dataList}/>
      </LayoutRow>
    </LayoutContainer>
  );
}

export default App
