document.querySelector("#print-value").addEventListener("click", overall);
function overall(){
    var inpValue = document.querySelector(".form-control").value;
    var createList = document.createElement("li");
    createList.setAttribute("class", "list-group-item");
    
    // create input
    var createInput = document.createElement("input");
    createInput.type = "checkbox";
    createInput.setAttribute("id", "check");
    createInput.setAttribute("class", "strikethrough");

    //create label for input
    var createLabel = document.createElement("label");
    createLabel.setAttribute("for", "check");
    createLabel.setAttribute("class", "stri");
    labelValue = document.createTextNode(inpValue);
    createLabel.append(labelValue);

    // append input and label to list

    createList.append(createInput);
    createList.append(createLabel);
      //realValue = document.createTextNode(inpValue);
      //createList.append(realValue);
    document.querySelector("#simp").append(createList);

    document.querySelector(".form-control").value = "";
   
}