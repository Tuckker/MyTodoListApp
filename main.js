//creating the elememts
window.addEventListener('load',() =>{
        const form = document.querySelector('new-goal-form');
        const input = document.querySelector('new-goal-input');
        const listElement= document.querySelector('#goals');

      //  console.log(form);


      //ensuring that function executes before the DOM fully loads
      window.onload = function(){
        
        //this functions ensures that a goal is filled in
form.addEventListener('submit',(e) =>{
     e.preventDefault();

        const goal= input.value;

        if(!goal){
                alert("Please fill out the goal");
                return;
        }
        
        //these elements will ensure  they get stored and shown on the app
        const goal_Element = document.createElement("div");
        goal_Element.classList.add("goals");

        const goal_content_element = document.createElement("div");
        goal_content_element.classList.add("content");
        //goal_content_element.innerText =task;

        goal_Element.appendChild(goal_content_element);

        const goal_input_element =document.createdElement("input");
        goal_input_element.classList.add("text");
        goal_input_element.type = "text";
        goal_input_element.value =goal;
        goal_input_element.setAttribute("readonly","readonly");
        goal_content_element.appendChild(goal_input_element);

        //here we will be adding the button elements

        const goal_action_element = document.createElement("div");
        goal_action_element>classList.add("action");

        const goal_edit_element = document.createElement("button");
        goal_edit_element.classList.add("edit");
        goal_edit_element.innerHTML ="Edit";

        const goal_delete_element = document.createElement("button");
        goal_delete_element.classList.add("delete");
        goal_delete_element.innerHTML = "Delete";


        //appending the button elements to the action
        goal_action_element.appendChild(goal_edit_element);
        goal_action_element.appendChild(goal_delete_element);


        goal_Element.appendChild(goal_action_element);
        listElement.appendChild(goal_Element);

        input.value ="";

  
        //creation of the buttons and giving them functions
        //this will allow you to edit the task and then change the element button to save so you can save the task you just edited
        goal_edit_element.addEventListener('click', () =>{
                if(goal_edit_element.innerText.toLowerCase()== "edit")
                {
                        goal_input_element.removeAttribute("readonly");
                        goal_input_element.focus();
                        goal_edit_element.innerText="Save";
                }else{
                        goal_input_element.setAttribute("readonly", "readonly");
                        goal_edit_element.innerText ="Edit";
                }
        })

        //this will delete the goal from the goal list
        goal_delete_element.addEventListener('click', () =>{
                listElement.removeChild(goal_Element);
        })

})
        

      }
        
})

