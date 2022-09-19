import { mergeSort } from "./mergeSort";
class Node {
	constructor(d) {
		this.data = d;
		this.left = null;
		this.right = null;
	}
}
class Tree {
	constructor(arr) {
		this.arr = [...removeDuplicate(mergeSort(arr))];
		this.root = null;
	}

	buildTree(arr, start, end) {
		arr = [...removeDuplicate(mergeSort(arr))];

		console.log();
		if (start > end) {
			return null;
		}
		let mid = parseInt((start + end) / 2);
		let node = new Node(arr[mid]);
		node.left = this.buildTree(arr, 0, mid);
		node.right = this.buildTree(arr, mid + 1, end);
		// this.arr = [...removeDuplicate(mergeSort(arr))];
		// this.arr = [...removeDuplicate(mergeSort(arr))];
		return node;
	}
	insert(key) {
		this.root = insertRec(this.root, key);
	}
	insertRec(root, key) {
		if (root == null) {
			root = new Node(key);
			return root;
		}
		if (key < root.data) {
			root = this.insertRec(root.left, key);
		} else if (key > root.data) {
			root = this.insertRec(root.right, key);
		}
		return root;
	}
	delete(key) {
		this.root = deleteRec(this.root, key);
	}
	deleteRec(root, key) {
		//base case if root is null or if tree is empty
		if (root == null) {
			return root;
		}
		//recur down the tree
		if (key < root.data) {
			root.left = this.deleteRec(root.left, key);
		} else if (key > root.data) {
			root.right = this.deleteRec(root.right, key);
		}
		//in this case key is same as the root.data
		else {
			//for 1 child
			if (root.right == null) {
				return root.left;
			} else if (root.left == null) {
				return root.right;
			}
			//for 2 children
			// we have to find the successor in the right subtree
			root.key = minValue(root);
			root.right = this.deleteRec(root.right, root.key);
		}
		return root;
	}
	minValue(root) {
		let minValue = root.data;
		while (root.left != null) {
			minValue = root.left.data;
			root = root.left;
		}
		return minValue;
	}
	find(data) {
		let newNode = this.root;
		if (newNode.data == data) {
			return newNode;
		} else if (newNode.data > data || newNode == null) {
			while (newNode.data != data) {
				newNode = newNode.left;
			}
		} else if (newNode.data < data || newNode == null) {
			while (newNode.data != data) {
				newNode = root.right;
			}
		}
		return newNode;
	}
	levelOrder(callback) {
		if (!this.root) return [];
		let queue = [this.root];
		let result = [];
		while (queue.length) {
			let level = [];
			let size = queue.length;
			for (let i = 0; i < size; i++) {
				let node = queue.shift;
				level = node.key;
				if (node.left) {
					queue.push(node.left);
				}
				if (node.right) {
					queue.push(node.right);
				}
				if (callback) {
					callback(node);
				}
			}
			result.push(level);
		}
		if (!callback) {
			return result;
		}
	}

	removeDuplicate(arr) {
		return [...new Set(arr)];
	}
}
