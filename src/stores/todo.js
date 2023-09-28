import { defineStore } from 'pinia'
import {ref,reactive,computed} from 'vue'
import axios from 'axios'

const AppStore = defineStore('uniqueID', ()=>{
    
    const inCompleteProject = ref([]);
    const completeProject = ref([]);

    const addProject = async function(inputData){
        const data = reactive({
            todo : inputData,
            completed : flase
        })

       const response = await axios.post(`https://dummyjson.com/todos`, data);
       if (response.status == 200){
            inCompleteProjectsFunction()
            completeProjectsFunction()
       }
    }

    const inCompleteProjectsFunction = async function(){
        const response = await axios.get(`https://dummyjson.com/todos`);
        inCompleteProject.value = response.data;
    }

    const completeProjectsFunction = async function(){
        const res = await axios.get(`https://dummyjson.com/todos`);
        completeProject.value = res.data; 
    }

   async function doneAsComplete(id){
       const response = await axios.put(`https://dummyjson.com/todos/${id}`);
       if(response.status == 200){
            inCompleteProjectsFunction()
            completeProjectsFunction()
        }
   }

   async function doneAsInComplete(id){
    const res = await axios.put(`https://devmunna.xyz/api/mark/undo/${id}`);
        if(res.status == 200){
            inCompleteProjectsFunction()
            completeProjectsFunction()
        }
   }

   async function deleteProject(id){
    const response = await axios.delete(`https://devmunna.xyz/api/delete/${id}`);
       if(response.status == 200){
            inCompleteProjectsFunction()
            completeProjectsFunction()
        }
   }


    return {inCompleteProject, inCompleteProjectsFunction, doneAsComplete, completeProjectsFunction ,completeProject , doneAsInComplete, deleteProject, addProject}
});



export {AppStore}

