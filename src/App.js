import {Container,Row,Col} from 'react-bootstrap'
import Inputs from './Inputs';
import Accordiom from './Accordiom';
import { useState } from 'react';
import { questions } from './data/data';
function App() {
  const [ques,setQues]=useState(questions)
  const onchange=(input)=>{
    questions.push(input)
    setQues([...questions])
  }
  const deleteall=()=>{
    questions.splice(0,questions.length)
    setQues(questions)
  }
  const deleteItem=(Id)=>{
    let itemindex=questions.findIndex((item)=>{
      return item.id===Id
    })
    questions.splice(itemindex,1)
    setQues([...questions])
  }
  return (
    <Container className='holder font'>
      <Row>
      <Col sm="4">
        <h2 >اسئلة واجوبة شائعة</h2>
      </Col>
      <Col sm="8">
        <Inputs change={onchange}/>
        <Accordiom data={ques} delete={deleteall} deleteItem={deleteItem}/>
      </Col>
      </Row>
    </Container >
  );
}

export default App;
