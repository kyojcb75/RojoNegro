import React from 'react';
import { COLORS } from '../../domain/NodeModel';

const nodeStyles = {
  nodeWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    position: 'relative',
  },
  treeWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  leftNode: {
    marginRight: '35px',
    position: 'relative',
  },
  rightNode: {
    marginLeft: '35px',
    position: 'relative',
  },
  childrenWrapper: {
    display: 'flex',
    width: '100%',
    marginTop: '16px',
  },
  rightArrow: {
    position: 'absolute',
    background: 'black',
    width: '30px',
    height: '2px',
    left: 'calc(50%)',
    transform: 'rotate(-45deg)',
  },
  leftArrow: {
    position: 'absolute',
    background: 'black',
    width: '30px',
    height: '2px',
    left: 'calc(50% - 30px)',
    transform: 'rotate(45deg)',
  },
  horizontalArrow: {
    position: 'absolute',
    background: 'black',
    width: '39px',
    height: '2px',
    top: '100%',
  },
};

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
    <div style={{ ...nodeStyles.nodeWrapper, ...nodeStyles.leftNode }}>
      <div style={{ position: 'relative' }}>
        <div style={nodeStyles.rightArrow}></div>
        <RBNode node={left} />
      </div>
    </div>
  );

  const renderRight = () => (
    <div style={{ ...nodeStyles.nodeWrapper, ...nodeStyles.rightNode }}>
      <div style={{ position: 'relative' }}>
        <div style={nodeStyles.leftArrow}></div>
        <RBNode node={right} />
      </div>
    </div>
  )

  return (
    <div style={nodeStyles.treeWrapper}>
      <div style={nodeStyles.nodeWrapper}>
        {(left || right) && <div style={nodeStyles.horizontalArrow}></div>}
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
        </div>
      </div>
      <div style={nodeStyles.childrenWrapper}>
        {left && renderLeft()}
        {right && renderRight()}
      </div>
    </div>
  );
};

export default RBNode;
