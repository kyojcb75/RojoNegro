import NodeModel, { COLORS } from '../domain/NodeModel';

class TreeModel {
  root = null;

  delete() { }
  insert(newValue) {
    if (!this.root) {
      this.root = new NodeModel({
        color: COLORS.BLACK,
        value: newValue,
      });

      return;
    }

    const newNode = new NodeModel({
      color: COLORS.RED,
      value: newValue,
    });

    let root = this.root;
    let currentNode = null;

    while (root && root.value) {
      currentNode = root;
      if (newValue > root.value) {
        root = root.right;
      } else {
        root = root.left;
      }
    }

    newNode.parent = currentNode;

    if (newNode.value > newNode.parent.value) {
      newNode.parent.right = newNode;
    } else {
      newNode.parent.left = newNode;
    }

  }
  rebalance() { }
  rotateLeft() { }
  rotateRight() { }
};

export default TreeModel;
