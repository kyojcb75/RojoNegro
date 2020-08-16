class NodeModel {
  color = null;
  left = null;
  parent = null;
  right = null;
  value = null;

  constructor({
    color = null,
    left = null,
    parent = null,
    right = null,
    value = null,
  } = {}) {
    this.color = color;
    this.left = left;
    this.parent = parent;
    this.right = right;
    this.value = value;
  }
};

export const COLORS = {
  RED: Symbol('red'),
  BLACK: Symbol('black'),
};

export default NodeModel;
