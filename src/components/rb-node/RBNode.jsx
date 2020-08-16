import React from 'react';
import { COLORS } from '../../domain/NodeModel';

const RBNode = ({ node }) => {

  if (!node || !node.value) {
    return <></>;
  }
  const {
    color,
    left,
    right,
    value
  } = node;

  const renderLeft = () => (
    <div style={{ top: '30px', right: '30px', position: 'absolute' }}>
      <div style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute',
          background: 'black',
          width: '30px',
          height: '2px',
          left: '12px',
          transform: 'rotate(-45deg)',
        }}></div>
        <RBNode node={left} />
      </div>
    </div>
  );

  const renderRight = () => (
    <div style={{ top: '30px', left: '30px', position: 'absolute' }}>
      <div style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute',
          background: 'black',
          width: '30px',
          height: '2px',
          left: '-10px',
          transform: 'rotate(45deg)',
        }}></div>
        <RBNode node={right} />
      </div>
    </div>
  )

  return (
    <>
      <div style={{
        background: color === COLORS.RED ? '#F00' : '#000',
        color: '#fff',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
        position: 'relative',
      }}>
        {value}
        {left && renderLeft()}
        {right && renderRight()}
      </div>

    </>
  );
};

export default RBNode;
