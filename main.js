//creating the elememts
window.addEventListener('load',() =>{
        const form = document.querySelector('new-goal-form');
        const input = document.querySelector('new-goal-input');
        const listElement= document.querySelector('#goals');

      //  console.log(form);



        //this functions ensures that a goal is filled in
form.addEventListener('submit',(e) =>{
     e.preventDefault();

        const goal= input.value;

        if(!goal){
                alert("Please fill out the task");
                return;
        }
        
        //these elements will ensure  they get stored on the app
        const goal_Element = document.createElement("div");
        goal_Element.classList.add("goal");

        const goal_content_element = document.createElement("div");
        goal_content_element.classList.add("content");
        goal_content_element.innerText =task;

        goal_Element.appendChild(goal_content_element);

        listElement.appendChild(goal_Element);



})
        

        
})

