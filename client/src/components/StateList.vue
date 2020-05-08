<template>
    <div id="state-list">

        <Summary
        v-bind:total="totalVisited"
        v-bind:visitedAll="visitedAll">
        </Summary>


        <div class="d-flex flex-wrap justify-content-around">
        <div class="p-2" v-for="state in states" v-bind:key="state.name">
            <State
            v-bind:state="state"
            v-on:isVisited="updateVisited"></State>
        <!-- this binds to the updateVisited method -->
        </div>
        </div>

    </div>
</template>

<script>
//imports and registers Statelist as a child component
import State from '@/components/State'
import Summary from '@/components/Summary'

export default {
    //imports and registers Statelist as a child component
    name: 'StateList',
    components: {
        State, Summary
    },
    data() {
        return {
            states: [],
        }
    },
    mounted() {
        this.getAll()
    },
    methods: {
        //this will get all the states information
        getAll() {
            this.$stateService.getAll().then(data => {
                this.states = data
            })
        },
        //every time a state is clicked, it will update if it has been visited or not
        //calls stateService.setVisited to call getAll() to update the states array
        updateVisited(stateName, stateVisited) {
            this.$stateService.setVisited(stateName, stateVisited).then(() => {
                this.getAll()
            })
        }
    },
    computed: {
        //this will calculate how many states were visited
        //takes the length of array and puts it at total visited
        totalVisited() {
            let visited = this.states.filter(function(state) {
                return state.visited
            })
            return visited.length
        },
        //if all states were visited, post message
        visitedAll() {
            let visited = this.states.filter(function(state) {
                return state.visited
            })
        return visited.length == this.states.length
        }
    }
}
</script>

<style>
</style>