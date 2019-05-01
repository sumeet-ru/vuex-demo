export default {
    state: {
        todos: []
    },
    mutations: {
        STATE_ADD_TODO(state, tdo) {
            state.todos.push(tdo);
        },
        STATE_REMOVE_TODO(state, index) {
            let arr = [...state.todos];
            arr.splice(index, 1);
            state.todos = arr;
        }
    },
    actions: {
        ADD_TODO(context, tdo) {
            context.commit('STATE_ADD_TODO', tdo);
        },
        REMOVE_TODO(context, index) {
            context.commit('STATE_REMOVE_TODO', index);
        }
    },
    getters: {
        todos: state => state.todos
    }
}
