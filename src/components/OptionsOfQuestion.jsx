import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

function randomizeArrOpt(optList, onOptClick)
{
    let opt, tamOptList = 0;
    for(opt in optList)
    {
        ++tamOptList;
    }
    let randInd = Math.round(Math.random() * (tamOptList-1));
    let randOptList = new Array(tamOptList);

    let i = randInd;
    for(opt in optList)
    {
        if(i >= tamOptList)
        {
            i = 0;
        }
        randOptList[i] = {
            option: optList[opt],
            click: onOptClick.wrong
        };
        ++i;
    }
    randOptList[randInd].click = onOptClick.ans;

    return randOptList;
}

export const OptionsOfQuestion = ({optList, onOptClick}) =>
{
    let optRandList = randomizeArrOpt(optList, onOptClick);
    //let onOptClickRand = randomizeArrOpt(onOptClick);
    return (<>

        <Stack gap={2}>
            <Button variant="info" onClick={optRandList[0].click}>
                {optRandList[0].option.wspa}
            </Button>
            <Button variant="info" onClick={optRandList[1].click}>
                {optRandList[1].option.wspa}
            </Button>
            <Button variant="info" onClick={optRandList[2].click}>
                {optRandList[2].option.wspa}
            </Button>
        </Stack>
    </>);
}