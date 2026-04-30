#include <iostream>
using namespace std;

struct Node {
  int key;
  Node* left;
  Node* right;
  Node(int value) : key(value), left(nullptr), right(nullptr) {}
};

Node* insertNode(Node* root, int value) {
  if (!root) return new Node(value);
  if (value < root->key) root->left = insertNode(root->left, value);
  else if (value > root->key) root->right = insertNode(root->right, value);
  return root;
}

int main() {
  Node* root = nullptr;
  for (int value : {8, 3, 10, 1, 6}) root = insertNode(root, value);
  return 0;
}
