import NodeModel, {COLORS} from '../domain/NodeModel';

class TreeModel {
    root = null;

    delete() {

    }

    insert(newValue) {

        // Si no existe la raiz el nuevo nodo es asignado como raiz
        if (!this.root) {
            this.root = new NodeModel({
                color: COLORS.BLACK,
                value: newValue,
            });
            return;
        }

        // El valor nuevo es creado como un nuevo nodo
        const newNode = new NodeModel({
            color: COLORS.RED,
            value: newValue,
        });

        // Variables temporales para la busqueda del ultimo nivel
        let root = this.root;
        let currentNode = null;

        // Buscamos el ultimo nodo que satisfaga la condicion para colocar el nodo al final
        while (root && root.value) {
            currentNode = root;
            if (newValue > root.value) {
                root = root.right;
            } else {
                root = root.left;
            }
        }

        // El nodo encontrado va a esr el padre de nuestro nuevo nodo
        newNode.parent = currentNode;

        //Si es > que el valor del padre va a la derecha o si no a la izquierda
        if (newNode.value > newNode.parent.value) {
            newNode.parent.right = newNode;
        } else {
            newNode.parent.left = newNode;
        }

        this.rebalanceNode(newNode);
    }

    rebalanceNode(node) {


        // Mientras no sea la raiz y el padre del nodo a rebalancear sea rojo
        while(node.parent !== null && node.parent.color === COLORS.RED){
            let auxNode = null;
            if(node.parent ===  node.parent.parent.left){
                auxNode = node.parent.parent.right;
                if(auxNode !== null && auxNode.color === COLORS.RED){
                    node.parent.color = COLORS.BLACK;
                    auxNode.color = COLORS.BLACK;
                    node.parent.parent.color = COLORS.RED;
                    node = node.parent.parent;
                    continue;
                }
                if(node === node.parent.right){
                    node = node.parent;
                    this.rotateNodeLeft(node);
                }
                node.parent.color = COLORS.BLACK;
                node.parent.parent.color = COLORS.RED;
                this.rotateNodeRight(node.parent.parent);
            } else {
                auxNode = node.parent.parent.left;
                if(auxNode !== null && auxNode.color === COLORS.RED){
                    node.parent.color = COLORS.BLACK;
                    auxNode.color = COLORS.BLACK;
                    node.parent.parent.color = COLORS.RED;
                    node = node.parent.parent;
                    continue;
                }
                if(node === node.parent.left){
                    node = node.parent;
                    this.rotateNodeRight(node);
                }

                node.parent.color = COLORS.BLACK;
                node.parent.parent.color = COLORS.RED;
                this.rotateNodeLeft(node.parent.parent);
            }
        }
        this.root.color = COLORS.BLACK;
    }

    rotateNodeLeft(node) {

        //Se toma el nodo derecho
        const nodeRight = node.right;

        // Si el valor a izq del nodo derecho existe entonces le asigna el valor o le asigna nulo, osea se esta subiendo
        node.right = nodeRight.left;

        // Si el hijo izq del nodo derecho existe entonces cambia de padre, ya no es el nodo derecho sino el nodo inicial

        if(nodeRight.left){
            nodeRight.left.parent = node
        }

        // Y el nodo derecho sube, ya no es hijo del nodo inicial sino hermano
        nodeRight.parent = node.parent;

        //Si el nodo inicial era la raiz entonces el nodo derecho se vuelve la raiz
        if(!node.parent){
            this.root = nodeRight;
        } else {
            //Si el nodo está a la izquierda se asigna el nodo derecho a la izquierda
            if(node === node.parent.left){
                node.parent.left = nodeRight
            } else {
                node.parent.right = nodeRight
            }
        }
        //Nodo inicial se vuelve nodo izquierdo de su nodo derecho
        nodeRight.left = node;
        //Significa que el nodo derecho ahora es el padre del nodo inicial
        node.parent = nodeRight

    }

    rotateNodeRight(node) {

        // Se toma el nodo izquierdo
        const nodeLeft = node.left;

        // Si el valor der del nodo izq existe entonces le asigna el valor o le asigna nulo, osea esta subiendo
        node.left = nodeLeft.right;

        // Si el hijo der del nodo izq existe entonces cambia de padre, ya no es el nodo izquierdo sino el nodo inicial
        if(nodeLeft.right){
            nodeLeft.right.parent = node;
        }

        // Y el nodo izq sube, ya no es hijo del nodo inicial sino su hermano
        nodeLeft.parent = node.parent;

        // Si el nodo inicial era la raiz entonces el nodo izq se vuelve la raiz
        if(!node.parent){
            this.root = nodeLeft;
        } else {
            //Si el nodo esta a la der se asigna el nodo izquierdo a la derecha
            if(node === node.parent.right){
                node.parent.right = nodeLeft;
            } else {
                node.parent.left = nodeLeft;
            }
        }

        // Nodo inicial se vuelve el nodo derecho de su nodo izquierdo
        nodeLeft.right = node;
        // Significa que el nodo izquierdo ahora es el padre del nodo inicial
        node.parent = nodeLeft;
    }
};

export default TreeModel;
