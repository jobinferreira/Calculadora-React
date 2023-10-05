import {Container, Content, Row} from './styles'
import Input from './components/Input/Input'
import Button from './components/Button/Button'
import { useState } from "react";

const App = () => {

  const [valorAtual, setValor] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleClear = () => {
    setValor("0");
    setFirstNumber('0')
    setOperation('')
  }

  const handleAddNumber = (numero) => {
    setValor(prev => `${prev === '0' ? '' : prev}${numero}`)
  }

  const handleSoma = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(valorAtual));
      setValor("0");
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(valorAtual);
      setValor(String(sum))
      setOperation('')
    }
  }

  const handleSub = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(valorAtual));
      setValor("0");
      setOperation('-')
    } else {
      const sum = Number(firstNumber) - Number(valorAtual);
      setValor(String(sum))
      setOperation('')
    }
  }

  const handleDiv = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(valorAtual));
      setValor("0");
      setOperation('/')
    } else {
      const sum = Number(firstNumber) / Number(valorAtual);
      setValor(String(sum))
      setOperation('')
    }
  }

  const handleMult = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(valorAtual));
      setValor("0");
      setOperation('x')
    } else {
      const sum = Number(firstNumber) * Number(valorAtual);
      setValor(String(sum))
      setOperation('')
    }
  }

    const handleEquals = () => {
      if(firstNumber != '0' && operation != '' && valorAtual != '0') {
        switch(operation) {
          case '+' :
            handleSoma();
            break;
            case '-' :
            handleSub();
            break;
            case '/' :
            handleDiv();
            break;
            case 'x' :
            handleMult();
            break;
            default:
              break;
        }
      } 
        
      }


  return (
    <Container>
      <Content>
        <Input value={valorAtual}/>
        <Row >
          <Button label="x" onClick={handleMult}/>
          <Button label="/" onClick={handleDiv}/>
          <Button label="C" onClick={handleClear}/>
          <Button label="."/>
        </ Row>
        <Row >
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={handleSub}/>
        </ Row>
        <Row >
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={handleSoma}/>
        </ Row>
        <Row >
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </ Row>
      </Content>
    </Container>
  );
}

export default App;
