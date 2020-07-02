<template>
    <div>
        <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <h2 align="left">Мои дела: </h2>

        <il>
            <li v-for="(deal, index) in deals" :key="index">
                <s v-if="finalDisabled(index)">{{ deal.text }}</s>
                <span v-if="finalDisabled(index)==false"> {{ deal.text }}</span>

                <button v-on:click="finalDeal(index)" :disabled="finalDisabled(index)">Завершить</button>
                <button v-on:click="deleteDeal(index)">Удалить</button>

            </li>
        </il>

        <p>
            <input v-model="inputDeal" placeholder="Введите новое дело">
            <button v-on:click="addDeal">Добавить</button>
        </p>
    </div>
</template>

<script>
    //import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'App',
        components: {
            //HelloWorld
        },
        data() {
            return {
                deals: [],
                inputDeal: null,
            };
        },
        methods: {
            finalDisabled: function (index) {
                if (this.deals[index]['disabled']) return true
                return false
            },
            deleteDeal: function (index) {
                this.deals.splice(index, 1)
            },
            finalDeal: function (index) {
                this.deals[index]['disabled'] = true
                console.log('deals', this.deals)
            },
            addDeal: function () {
                if (this.inputDeal.length > 0) {
                    this.deals.push({
                        text: this.inputDeal,
                        disabled: false
                    })
                }
                this.inputDeal = null
            }
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
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
