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

  const login = Vue.component('login', {
    template: '#login'
  });

  const todoapp = Vue.component('todoapp-template', {
    template: '#todoapp-template',
    data() {
      return {
        showByIndex: null
      };
    },
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
      }
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
      // rerender(){        
      //   this.show = !this.show;
      // }
      // destroyShow: () => {
      //   this.show = true;
      //   console.log(this.show);
      //   console.log('show');
      // },
      // destroyHide: () => {
      //   this.show = false;
      //   console.log(this.show);
      //   console.log('don’t show');
      // }      
    },
  });

  const routes = [
    { path: '/', component: todoapp },
    { path: '/login', component: login },
    { path: '*', redirect: '/' }
  ];

  const router = new VueRouter({
    routes // short for `routes: routes`
  });

  // app Vue instance
  new Vue({
    router,
    store,
    methods: {
      
    },
    computed: {
      errorMessage () {
        return this.$store.getters.errorMessage;
      }   
    }
  }).$mount('#app');

  var el = document.getElementById('todo-list');
  var sortable = Sortable.create(el, {
    animation: 150
  });

})();
