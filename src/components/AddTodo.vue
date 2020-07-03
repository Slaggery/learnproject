<template>
    <div>
        <label for="addInput">
            Новое дело
        </label>
        <input id="addInput" v-model="inputTodo" placeholder="Введите новое дело"/>
        <button v-on:click="addButton" :disabled="disableAddButton">Добавить</button>
    </div>
</template>

<script>
    import EventBus from "@/components/EVENT-bus";
    export default {
        name: "addTodo",
        data() {
            return {
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
            addButton: function () {
                EventBus.$emit('addButton', this.inputTodo);
                console.log('inputTodo', this.inputTodo)
                this.inputTodo = null
                this.listKey++
            }
        },
        mounted() {

        }
    }

</script>