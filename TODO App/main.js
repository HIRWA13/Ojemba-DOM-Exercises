const  addTodo = () =>{
    let todo = document.getElementById("todo").value;
    const text = document.createTextNode(todo);
    const li = document.createElement("li");
    li.appendChild(text);
    document.getElementById("todoList").appendChild(li);
    document.getElementById("todo").value = "";
    const task = document.createElement("input");
    task.setAttribute("type", "checkbox");
    li.appendChild(task);
    task.addEventListener("click", function(){
        if(this.checked){
            // add a line through the text
            this.parentNode.style.textDecoration = "line-through";
        } else {
            // remove the line through the text
            this.parentNode.style.textDecoration = "none";
        }
    });
    // add the remove button 
    const removeBtn = document.createElement("button");
    const removeText = document.createTextNode("Remove");
    removeBtn.appendChild(removeText);
    li.appendChild(removeBtn);
    removeBtn.addEventListener("click", function(){
        this.parentNode.remove();
    });
}
// add an event listener to the add button
document.getElementById("submit").addEventListener("click", addTodo);
