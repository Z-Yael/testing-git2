console.log("shopping list");

const inputTag = document.querySelector(".form-control");
const shoppingListTag = document.getElementsByClassName(
  "shoppingListContainer"
)[0];
let productId = 1;

const changeFunction = (event) => {
  const inputValue = event.target.value;
  const parentContainerTag = document.createElement("div");
  parentContainerTag.classList.add("parentContainer");

  const parentDivTag = document.createElement("div");
  parentDivTag.classList.add("productName");
  parentDivTag.addEventListener("click", () => {
    parentDivTag.classList.toggle("purchased");
  });

  const spanTag = document.createElement("span");
  const trashIconTag = document.createElement("i");
  trashIconTag.classList.add("fa-sharp", "fa-solid", "fa-trash");
  trashIconTag.addEventListener("click", () => {
    parentContainerTag.remove();
  });

  spanTag.id = productId;
  const product = `${productId} . ${inputValue}`;
  spanTag.append(product);
  parentDivTag.append(spanTag);
  parentContainerTag.append(parentDivTag, trashIconTag);
  shoppingListTag.append(parentContainerTag);
  inputTag.value = "";
  productId += 1;
};

inputTag.addEventListener("change", changeFunction);
