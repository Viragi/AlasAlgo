class Node{
  constructor(data){
    this.data=data;
    this.left=null;
    this.right=null;
  }
}

class BinarySearchTree{
  constructor(){
    this.root=null;
  }

  insert(val){
    var newNode = new Node(val);
    if(!this.root){  
      this.root=newNode  
    } else{
     var parent= this.Modifiedfind(val);
     if(val> parent.data){
        parent.right=newNode;   
     }
     else if(val< parent.data){
       parent.left=newNode;
     }
     else{
       return false;
      }
    }
    return true;
  }

  Modifiedfind(val){
    var parent = this.root;
    // console.log("Hello",parent)
    while(true){
      if(parent.data==val) return parent;
      if(val > parent.data){
        if(!parent.right){
          return parent
        }
        parent = parent.right;
      }else{
        if(!parent.left){
          return parent
        }
        parent = parent.left;
      }
    }
  }

  find(val){
    var parent = this.root;
    while(parent){
    if(parent.data==val) return parent;
    if(val > parent.data){
      parent = parent.right;
    }else{
      parent = parent.left;
    }
  }
  return null;
  }

}
var Bt = new BinarySearchTree();
Bt.insert(5);
Bt.insert(3); 
Bt.insert(6);
Bt.insert(7);
Bt.insert(9);
Bt.insert(11);
// Bt.insert(5);



// Bt.find(2);

 console.log(Bt);
