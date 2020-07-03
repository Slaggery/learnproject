<template>
    <div>
        <h2>Мои дела: </h2>
        <ul :key="listKey">
            <li v-for="(todo, index) in todos" :key="index">
                <s v-if="!!todo.disabled">{{ todo.text }}</s>
                <span v-else> {{ todo.text }}</span>

                <button v-on:click="finalTodo(index)" :disabled="!!todo.disabled">Завершить</button>
                <button v-on:click="deleteTodo(index)">Удалить</button>
            </li>
        </ul>
    </div>
</template>

<script>
    import EventBus from "@/components/EVENT-bus";

    export default {
        name: "TodoList",
        data() {
            return {
                todos: [],
                inputTodo: '',
                listKey: 0,
            };
        },
        computed: {
            disableAddButton() {
                if (this.inputTodo === null) return true
                return this.inputTodo.length < 1
            }
        },
        methods: {
            deleteTodo: function (index) {
                this.todos.splice(index, 1)
                this.listKey++
            },
            finalTodo: function (index) {
                this.todos[index].disabled = true
                this.listKey++
            },
        },
        mounted() {
            EventBus.$on('addButton', todo => {
                this.todos.push({text: todo})
            });
        }
    }
</script>