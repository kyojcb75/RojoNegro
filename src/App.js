import React, { useState } from 'react';
import './App.css';
import RBNode from './components/rb-node/RBNode';
import TreeModel from './domain/TreeModel';

function App() {

  const [value, setValue] = useState();
  const [tree] = useState(new TreeModel());

  const insertValue = () => {
    tree.insert(+value);
    setValue('');
  };

  return (
    <div className="App">
      <h1>Arbol rojo negro</h1>
      <input value={value} onChange={({target: {value}}) => {
        setValue(value);
      }} />
      <button onClick={insertValue}>Insert</button>
      <hr/>
      <div>
        <RBNode node={tree.root} />
      </div>
    </div>
  );
}

export default App;
