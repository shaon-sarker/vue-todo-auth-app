<script setup>
   import {reactive} from 'vue'
   import store from '../stores/user'
   const state = store()

   const registerForm = reactive({});

   function submitData(){
      state.registration(registerForm)
   }

</script>

<template>
    <br>
    <div class="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div class="px-6 py-4">
        <div class="flex justify-center mx-auto">
            <img class="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="">
        </div>

        <h3 class="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>

        <p class="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

        <form>
            <div class="w-full mt-4">
                <input class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="text" placeholder="Username" aria-label="User name" v-model="registerForm.name" />
            </div>

            <div class="w-full mt-4">
                <input class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email " aria-label="Email Address" v-model="registerForm.email" />
            </div>

            <div class="w-full mt-4">
                <input class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password" 
                v-model="registerForm.password"/>
            </div>
            <div class="w-full mt-4">
                <input class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Confirm Password" aria-label="Password" 
                v-model="registerForm.confirm_password"/>
            </div>

            <div class="flex items-center justify-between mt-4">
                <button type="button" class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" @click="submitData()">
                    Register
                </button>
            </div>
        </form>
    </div>

    <div class="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
        <span class="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>

        <router-link :to="{name: 'login'}" class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Login</router-link>
    </div>
</div>
</template>

<style scoped>

</style>