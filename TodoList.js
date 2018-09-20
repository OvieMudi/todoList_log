let todo = [];

let popup = prompt("What would you like to do?");


while(popup !== "quit"){

	// "add" item to Todo List
	if (popup === "new") {
		addTodo();

	// "list" all item on the list
	}else if (popup === "list"){
		listTodo();
		//Delete an item from the array using the index splice()

	}else if (popup === "delete") {
		deleteItem();
	}
	
	// repeat prompt OR.."quit" app by exiting prompt

	let popup = prompt("What would you like to do?");
}

console.log("OK, you quit the app!")



// create functions to simplify code
//Add Todo to list
function addTodo(){
	let newTodo = prompt("Enter New Todo")
	todo.push(newTodo);
	console.log("You entered a new item!")
}

// List Todo
function listTodo(){
	console.log("***************");
	todo.forEach(function(todos, i){
		let n = i+1;
		console.log(n + ": " + todos);
			
	});
	console.log("***************");
}

//Delete Item
function deleteItem(){
	//prompt for index
		let index = prompt("Enter number corresponding to the item");
		let num = index-1;
		todo.splice(num, 1);
		console.log("You deleted the item!");
}