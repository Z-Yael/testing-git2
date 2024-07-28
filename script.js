console.log("shopping list")

const inputTag = document.querySelector('.form-control');
const shoppingListTag = document.getElementsByClassName('shoppingListContainer')[0];
//console.log(inputTag)
let productId = 1;
const changeFunction = (event) => {
   // console.log("input change is", event.target.value)
   const inputValue = event.target.value;
   //console.log(inputValue)
   const parentDivTag = document.createElement('div');
   const parentContainerTag = document.createElement('div')
   parentContainerTag.classList.add("parentContainer")
   parentDivTag.classList.add("productName")
   //<i class="fa-sharp fa-solid fa-trash"></i>
   parentDivTag.addEventListener('click',()=>{
    const purchasedClassExist = parentDivTag.classList.contains("purchased");
    if(purchasedClassExist){
        parentDivTag.classList.remove("purchased")
    }else{
        parentDivTag.classList.add("purchased")
    }
   })
   const spanTag = document.createElement('span');
   const trashIconTag = document.createElement('i');
   trashIconTag.classList.add('fa-sharp', 'fa-solid', "fa-trash")
   trashIconTag.addEventListener('click',(event)=>{
    parentContainerTag.remove();
   })
   spanTag.id = productId;
   const product = productId.toString() + " .  " + inputValue;
   spanTag.append(product);
   parentDivTag.append(spanTag)
   parentContainerTag.append(parentDivTag,trashIconTag)
   shoppingListTag.append(parentContainerTag)
   inputTag.value = "";
   productId += 1;
}
inputTag.addEventListener("change", changeFunction)