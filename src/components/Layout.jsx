import 'bootstrap/dist/css/bootstrap.css';
import { WordList } from './WordList';
import { OptionsOfQuestion } from './OptionsOfQuestion';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Layout = ({dataList}) =>
{
    return (<>
        <Container className = "vh-100 px-0" fluid>
            <Row className = "justify-content-center align-items-center h-50">
                <Col md="auto">
                    <WordList wordList={dataList.ans} />
                </Col>
            </Row>
            <Row className = "justify-content-center align-items-center h-50">
                <Col md="auto">
                    <OptionsOfQuestion optList={dataList}/>
                </Col>
            </Row>
        </Container>
        </>
        );
}