<template>
    <div>
        <label for="addInput">
            Новое дело
        </label>
        <input id="addInput" v-model="inputTodo" @keyup.enter="addButton" placeholder="Введите новое дело"/>
        <button v-on:click="addButton" :disabled="disableAddButton">Добавить</button>
    </div>
</template>

<script>
    export default {
        name: "addTodo",
        data() {
            return {
                inputTodo: '',
            };
        },
        computed: {
            disableAddButton() {
                if (this.inputTodo === null) return true
                return this.inputTodo.length < 1
            },
        },
        methods: {
            addButton: function () {
                if (this.inputTodo.length >= 1) {
                    this.$store.dispatch('addRow', {text: this.inputTodo})
                    this.inputTodo = null
                }
            }
        },
        mounted() {

        }
    }

</script>