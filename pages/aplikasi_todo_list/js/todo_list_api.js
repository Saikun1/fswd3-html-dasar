//get apikey
const baseUrl = "https://crudcrud.com/api/";

//apikey
const apiKey = "143a91217cf84bc4bf5c31f7bb1ca9c9";
const url = baseUrl + apiKey + "/todolist";


let todos = [];
loadTodos();

function getItems(){
    fetch(uri)
    .then(response => response.json())
    .then(data => _displayItems(data))
    .catch(error => console.error('Unable to get items.', error));
}

function addItems(){
    fetch(uri, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      })
    let input = document.getElementById("inputText");
        let list= document.getElementById("list");
        let minimalValue = 3;
        let listNum = 0;

function addList(){
        // get
        let inputText = filterList(input.value);
        // set 
       if (inputText) {
        list.innerHTML += ` <li class=" my-3 py-3 shadow list-group-item " id="list${listNum}">
                    <div class="row">
                    <div class="col-1">
                    <input class="" type="checkbox" id="check${listNum}" onclick="done(${listNum})">
                    </div>
                    <div class="col-6">
                        <span class=" h4" id="text${listNum}"> ${inputText} </span>
                    </div>
                    <div class="col-4">
                         <button class=" btn btn-dark" onclick="deleteList(${listNum})">Delete</button>
                    </div>                  
                     </div>    
                    </li> `;
            input.value="";
            listNum++;
        }
    }
    
    }

function doneList(){
        let checkbox = document.getElementById(`check${listId}`);
        let current = document.getElementById(`text${listId}`);
        let classExit=current.classList.contains("text-decoration-line-through");
        if (classExit == true) {
            current.classList.remove("text-decoration-line-through");
        }else{
            current.classList.add("text-decoration-line-through");
        }
        
    }
function addList(x){
        if (x) {
             if (x.length >= minimalValue) {
                 return x;
             }
             else{
                 alert("Masukkan lebih dari 3 kata")
             }
        }
        else{
             return false;
        }
 }
function editList(listId){
    const item = todos.find(item => item.id === id);
    editList=(listId)=>{
        let currentText = document.getElementById(`text${listId}`);
        let newText = prompt("Apakah ingin Mengubah daftar?",currentText.innerHTML);
        if (filterList(newText)) {
            currentText.innerHTML = newText; 
        }
    }
}
function deleteItem(){
        fetch(`${uri}/${id}`, {
            method: 'DELETE'
          })
          .then(() => getItems())
          .catch(error => console.error('Unable to delete item.', error));
        let current = document.getElementById(`text${listId}`).innerHTML;
           let deleteComfirm = confirm(`Apakah Anda yakin menghapus data? ${current}`);
        if (deleteComfirm) {
             let p = document.getElementById("list")
            let c = document.getElementById(`list${listId}`);
            p.removeChild(c);
        }
        else{
            console.log("deleted");
        }
    };
    
