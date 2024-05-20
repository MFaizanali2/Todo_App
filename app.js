//  <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js" 
//  integrity="sha512-AA1Bzp5Q0K1KanKKmvN/4d3IRKVlv9PYgwFPvm32nPO6QS8yH1HO7LbgB1pgiOxPtfeg5zEn2ba64MUcqJx6CA=="
//   crossorigin="anonymous" referrerpolicy="no-referrer"></script>
const inputbox = document.getElementById("input");
const taskbox = document.getElementById("task");

function addtask(){
    const inputbox = document.getElementById("input");
    const taskbox = document.getElementById("task");
    if(inputbox.value == ""){
        // Swal.fire("SweetAlert2 is working!");
        alert("Input is empty")
    }else{
        
        const newele = document.createElement("li");
        let date = new Date().toLocaleDateString();
        newele.innerHTML = `${inputbox.value} ${date} <i class="fa-solid fa-trash"></i>`;
        taskbox.appendChild(newele);
        inputbox.value = "";
        newele.querySelector("i").addEventListener("click", remove);
        function remove(){
            newele.remove();
            
        }
        
    
    }
    inputbox.value = "";
    
}


// let li = document.createElement("li");
//         li.innerHTML = inputbox.value;
//         taskbox.appendChild(li)
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.appendChild(span)

//         taskbox.addEventListener("click", function(e){
    
//         if(e.target.tagName === "li"){
//             e.target.classList.toggle("check");
//         }else if(e.target.tagName === "span"){
//             e.target.parentElement.remove();
//         }
//         }, false);
