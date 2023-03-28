import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";


export const OptionsOfQuestion = ({optList, onOptClick}) =>
{
    return (<>
        <Stack gap={2}>
            <Button variant="info" onClick={onOptClick.ans}>
                {optList.ans.wspa}
            </Button>
            <Button variant="info" onClick={onOptClick.wrong}>
                {optList.wr1.wspa}
            </Button>
            <Button variant="info" onClick={onOptClick.wrong}>
                {optList.wr2.wspa}
            </Button>
        </Stack>
    </>);
}