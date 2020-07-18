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
                    <input type="checkbox" name="chk" v-on:click="chkClick()">
                    <s v-if="!!todo.disabled">{{ todo.text }}</s>
                    <span v-else> {{ todo.text }}</span>
                    <button v-on:click="finalTodo(index)" :disabled="!!todo.disabled">Завершить</button>
                    <button v-on:click="deleteTodo(index)">Удалить</button>
                </label>
            </div>
        </label> <br>
        <label>
            <select id="selectID" :disabled="disabledSelect">
                <option value="selected">Выберите действия</option>
                <option value="final">Завершить</option>
                <option value="delete">Удалить</option>
            </select>
            <button v-on:click="applySelected" :disabled="disabledSelect">Применить</button>
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
                chk: window.document.getElementsByName('chk'),
                disableSelect: false
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
                return !this.disableSelect
            },
        },
        methods: {
            applySelected: function () {
                let store = this.$store
                this.chk.forEach(function (item, index) {
                    if (item.checked) {
                        store.dispatch('delRow', index)
                    }
                })
            },
            chkClick: function () {
                let disableSelect = false
                for (let i = 0; i < this.chk.length; i++){
                    if (this.chk[i].checked === true) {
                        disableSelect = true
                    }
                    this.disableSelect = disableSelect
                }
                    },
            checkedAll: function () {
                let chkAll = !this.chkAll
                this.chk.forEach(function (item) {
                    item.checked = chkAll
                })
                this.disableSelect = !this.chkAll
            },
            deleteTodo: function (index) {
                console.log('index', index)
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