<template>
    <div id="app">
        <TodoList/>
        <AddTodo/>
    </div>
</template>

<script>
    import TodoList from './components/TodoList.vue'
    import AddTodo from './components/AddTodo.vue'

    export default {
        name: 'App',
        components: {
            TodoList,
            AddTodo
        },
        mounted() {

        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
