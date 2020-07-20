<template>
    <div>
        <h2>Мои дела: </h2>
        <hr>
        <label class="container">
            <input type="checkbox" v-model="chkAll" :disabled="disabledCheckBox" v-on:click="checkedAll()">
            Выбрать всё
        </label> <br><br>
        <label>
            <div v-for="(todo, index) in todoList" v-bind:key="index">
                <label class="container">
                    <input type="checkbox" v-model="todo.checked" :id="`chk${index}`">
                    <s v-if="!!todo.disabled">{{ todo.text }}</s>
                    <span v-else> {{ todo.text }}</span>
                    <button v-on:click="finalTodo(index)" :disabled="!!todo.disabled">Завершить</button>
                    <button v-on:click="deleteTodo(index)">Удалить</button>
                </label>
            </div>
        </label> <br>
        <label>
            <select v-model="selected" :disabled="disabledSelect">
                <option disabled value="">Выберите действия</option>
                <option value="final">Завершить</option>
                <option value="delete">Удалить</option>
            </select>
            <button v-on:click="applySelected" :disabled="selected === ''">Применить</button>
        </label>
        <hr>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "TodoList",
        data() {
            return {
                chkAll: false,
                selected: ''
            };

        },
        computed: {
            ...mapGetters([
                'todoList'
            ]),
            disabledCheckBox() {
                return this.todoList.length === 0
            },
            disabledSelect() {
                const filtered = this.todoList.filter(el => !!el.checked)
                return !filtered.length > 0
            },
        },
        methods: {
            applySelected: function () {
                if (this.selected === 'delete') {
                    for (let i = this.todoList.length - 1; i >= 0; i--) {
                        if (this.todoList[i].checked) {
                            this.todoList.splice(i, 1)
                        }
                    }
                    this.selected = ''
                    this.chkAll = false
                }

                if (this.selected === 'final') {
                    for (let i = this.todoList.length - 1; i >=0; i--) {
                        if (this.todoList[i].checked){
                            const newRow = Object.assign({}, this.todoList[i])
                            newRow.disabled = true
                            this.todoList.splice(i, 1, newRow)
                            this.todoList[i].checked = false
                        }
                    }
                    this.selected = ''
                    this.chkAll = false
                }
            },
            checkedAll: function () {
                this.todoList.forEach(el => el.checked = !this.chkAll)
            },
            deleteTodo: function (index) {
                this.$store.dispatch('delRow', index)
            },
            finalTodo: function (index) {
                const newRow = Object.assign({}, this.todoList[index])
                newRow.disabled = true
                this.todoList.splice(index, 1, newRow)
            },
        },
        mounted() {
        }
    }
</script>