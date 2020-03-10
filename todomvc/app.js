/* global Vue, Vuex, axios, FileReader, window, Promise */
/* eslint-disable no-console */
(function () {
  Vue.use(Vuex);

  function randomId () {
    return Math.random()
      .toString()
      .substr(2, 10);
  }

  const store = new Vuex.Store({
    state: {
      loading: true,
      todos: [],
      newTodo: '',
      errorMessage: false
    },
    getters: {
      newTodo: state => state.newTodo,
      todos: state => state.todos,
      loading: state => state.loading,
      errorMessage: state => state.errorMessage
    },
    mutations: {
      SET_LOADING (state, flag) {
        state.loading = flag;
      },
      SHOW_ERROR (state, flag) {
        state.errorMessage = flag;
      },
      SET_TODOS (state, todos) {
        state.todos = todos;
      },
      SET_NEW_TODO (state, todo) {
        state.newTodo = todo;
      },
      ADD_TODO (state, todoObject) {
        console.log('add todo', todoObject);
        state.todos.push(todoObject);
      },
      COMPLETE_TODO (state, todo) {
        let todos = state.todos;
        console.log('check todo ' + todo.id);
        console.log(todos.indexOf(todo));
      },
      REMOVE_TODO (state, todo) {
        let todos = state.todos;
        console.log('removing todo');
        todos.splice(todos.indexOf(todo), 1);
      },
      CLEAR_NEW_TODO (state) {
        state.newTodo = '';
        console.log('clearing new todo');
      }
    },
    actions: {
      loadTodos ({ commit }) {
        commit('SET_LOADING', true);

        axios
          .get('/todos')
          .then(r => r.data)
          .then(todos => {
            console.log('got %d todos', todos.length);
            commit('SET_TODOS', todos);
            commit('SET_LOADING', false);
          })
          .catch(e => {
            console.error('could not load todos');
            console.error(e.message);
            console.error(e.response.data);
          });
      },
      /**
       * Sets text for the future todo
       *
       * @param {any} { commit }
       * @param {string} todo Message
       */
      setNewTodo ({ commit }, todo) {
        commit('SET_NEW_TODO', todo);
      },
      addTodo ({ commit, state }) {
        if (!state.newTodo) {
          // do not add empty todos
          return;
        }
        const todo = {
          title: state.newTodo,
          completed: false,
          id: randomId()
        };
        axios.post('/todos', todo).then(() => {  
                  
          commit('ADD_TODO', todo);
          
        }).catch(function (error) {
          commit('SHOW_ERROR', true);
          setTimeout(() => {
            commit('SHOW_ERROR', false);
          }, 4000);
            
        });
      },
      completeTodo ({ commit }, todo) {
        axios.patch(`/todos/${todo.id}`, {completed: !todo.completed}).then(() => {
          commit('COMPLETE_TODO', todo);
        });
      },
      removeTodo ({ commit }, todo) {
        axios.delete(`/todos/${todo.id}`).then(() => {
          console.log('removed todo', todo.id, 'from the server');
          commit('REMOVE_TODO', todo);
        });
      },
      clearNewTodo ({ commit }) {
        commit('CLEAR_NEW_TODO');
      }
     
    }
  });

  // app Vue instance
  const app = new Vue({
    store,
    data: {
      file: null
    },
    el: '.app',
    created () {
      this.$store.dispatch('loadTodos');
    },

    // computed properties
    // https://vuejs.org/guide/computed.html
    computed: {
      loading () {
        return this.$store.getters.loading;
      },
      newTodo () {
        return this.$store.getters.newTodo;
      },
      todos () {
        return this.$store.getters.todos;
      },
      errorMessage () {
        return this.$store.getters.errorMessage;
      },
    },

    // methods that implement data logic.
    // note there's no DOM manipulation here at all.
    methods: {
      setNewTodo (e) {
        this.$store.dispatch('setNewTodo', e.target.value);
      },

      addTodo (e) {
        e.target.value = '';
        this.$store.dispatch('addTodo');
        this.$store.dispatch('clearNewTodo');
      },

      completeTodo (todo) {
        this.$store.dispatch('completeTodo', todo);
      },

      removeTodo (todo) {
        this.$store.dispatch('removeTodo', todo);
      },

      // utility method for create a todo with title and completed state
      addEntireTodo (title, completed = false) {
        this.$store.dispatch('addEntireTodo', { title, completed });
      }
    }
  });

  window.app = app;

})();
