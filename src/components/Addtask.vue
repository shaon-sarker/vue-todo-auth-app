<script setup>
  import { AppStore } from '../stores/todo';
  import { onMounted, reactive,ref } from 'vue';
  const store = AppStore();

  const inputData = ref('')
  
  function insertInputData(){
      store.addProject(inputData)
  }

  onMounted(()=>{
    store.inCompleteProjectsFunction();
    store.completeProjectsFunction();
  });
</script>






<template>
         <br>
        <div class="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div class="px-6 py-4">
    
            <h3 class="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Todo App</h3>
                <div class="w-full mt-4">
                    <input class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="text" placeholder="Todo Name" v-model="inputData"/>
                </div>
                <div class="flex items-center justify-between mt-4">
                    <button class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" @click="insertInputData()">
                        Add
                    </button>
                </div>

                <div  v-for="(project, index) in store.inCompleteProject" :key="index">
                    <p class="mt-1 text-center text-gray-500 dark:text-gray-400">{{ project.name }}</p>
                    <button type="button" class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" @click="store.doneAsComplete(project.id)">
                        Done
                    </button>
                    <button type="button" class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" @click="store.deleteProject(project.id)">
                        Remove
                    </button>
                </div>
                <br><br>

                
                <div v-for="(project, index) in store.completeProject" :key="index">
                    <p class="mt-1 text-center text-gray-500 dark:text-gray-400">{{ project.name }}</p>
                    <button type="button" class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" @click="store.doneAsInComplete(project.id)">
                        Not Done
                    </button>
                    <button type="button" class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"  @click="store.deleteProject(project.id)">
                        Remove
                    </button>
                </div>
        </div>
        </div>

</template>