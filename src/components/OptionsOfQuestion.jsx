import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

export const OptionsOfQuestion = () =>
{
    return (<>
        <Stack gap={2}>
            <Button variant="info">opc 1</Button>
            <Button variant="info">opc 2</Button>
            <Button variant="info">opc 3</Button>
        </Stack>
    </>);
}