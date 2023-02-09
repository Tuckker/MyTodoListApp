//creating the elememts
window.addEventListener('load',() =>{
        const form = document.querySelector('new-goal-form');
        const input = document.querySelector('new-goal-input');
        const listElement= documeny.querySelector('#goals');

        console.log(form);



        //this functions ensures that a goal is filled in
form.addEventListener('submit',(e)=>{

        e.preventDefault();

        const goal= input.value;

        if(!goal){
                alert("Please fill out the task");
                return;
        }
        

})
        

        
})

