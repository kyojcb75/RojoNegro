import React, { useState } from 'react';
import './App.css';
import RBNode from './components/rb-node/RBNode';
import TreeModel from './domain/TreeModel';

const treeStyles = {
  display: 'flex',
};

const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '300px',
  alignItems: 'center',
  margin: '0 auto',
};
const inputStyles = {
  marginBottom: '16px',
  border: 'solid 0.5px gray',
  borderRadius: '3px',
  padding: '8px',
  fontSize: '16px',
  boxSizing: 'border-box',
  width: '100%'
};

const buttonStyles = {
  marginBottom: '16px',
  border: 'solid 0.5px gray',
  borderRadius: '3px',
  padding: '8px',
  fontSize: '16px',
  width: '100%',
  cursor: 'pointer',
};

function App() {

  const [value, setValue] = useState('');
  const [tree] = useState(new TreeModel());

  const insertValue = () => {
    tree.insert(+value);
    setValue('');
  };

  return (
    <div className="App">
      <h1>Arbol rojo negro</h1>
      <div style={formStyles}>
        <input style={inputStyles} type="number" value={value} onChange={({target: {value}}) => {
          setValue(Math.max(0, +value));
        }} />
        <button style={buttonStyles} onClick={insertValue} disabled={!value}>Insert</button>
      </div>
      <hr/>
      <div style={treeStyles}>
        <RBNode node={tree.root} />
      </div>
    </div>
  );
}

export default App;
