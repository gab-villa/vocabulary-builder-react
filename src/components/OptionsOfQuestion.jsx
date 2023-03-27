import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

export const OptionsOfQuestion = ({optList}) =>
{
    return (<>
        <Stack gap={2}>
            <Button variant="info">{optList.ans[0].wspa}</Button>
            <Button variant="info">{optList.wr1[0].wspa}</Button>
            <Button variant="info">{optList.wr2[0].wspa}</Button>
        </Stack>
    </>);
}