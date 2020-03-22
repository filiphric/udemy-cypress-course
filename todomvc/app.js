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
      username: '',
      password: '',
      errorMessage: {
        show: false,
        text: ''
      },
      loggedIn: false,
    },
    getters: {
      newTodo: state => state.newTodo,
      todos: state => state.todos,
      loading: state => state.loading,
      errorMessage: state => state.errorMessage,
      loggedIn: state => state.loggedIn,
      username: state => state.username,
      password: state => state.password
    },
    mutations: {
      SET_LOADING (state, flag) {
        state.loading = flag;
      },
      SHOW_ERROR (state) {
        state.errorMessage.show = true;
        setTimeout(() => {
          state.errorMessage.show = false;
        }, 4000);
      },
      ERROR_MESSAGE ( state, message ) {
        state.errorMessage.text = message;
      },
      LOGGED_IN_MESSAGE (state) {
        state.loggedIn = true;
        setTimeout(() => {
          state.loggedIn = false;
        }, 4000);
        
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
      COMPLETE_TODO (todo) {
        console.log('complete todo ' + todo.id);
      },
      REMOVE_TODO (state, todo) {
        let todos = state.todos;
        console.log('removing todo');
        todos.splice(todos.indexOf(todo), 1);
      },
      CLEAR_NEW_TODO (state) {
        state.newTodo = '';
        console.log('clearing new todo');
      },
      SET_USERNAME (state, username) {
        state.username = username;
      },
      SET_PASSWORD (state, password) {
        state.password = password;
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
        }).catch( () => {
          commit('SHOW_ERROR');
          commit('ERROR_MESSAGE', 'Sorry. There was an error creating todo item.');
        });
      },
      completeTodo ({ commit }, todo) {
        axios.patch(`/todos/${todo.id}`, {completed: !todo.completed});
        commit('COMPLETE_TODO');
      },
      removeTodo ({ commit }, todo) {
        axios.delete(`/todos/${todo.id}`).then(() => {
          console.log('removed todo', todo.id, 'from the server');
          commit('REMOVE_TODO', todo);
        });
      },
      clearNewTodo ({ commit }) {
        commit('CLEAR_NEW_TODO');
      },
      setUsername ({ commit }, username) {
        commit('SET_USERNAME', username);
      },
      setPassword ({ commit }, password) {
        commit('SET_PASSWORD', password);
      },
      login ({ commit, state }) {
        const credentials = {
          password: state.password,
          username: state.username
        };
        axios.post('/login', credentials ).then(() => {
          commit('LOGGED_IN_MESSAGE');
          document.cookie = 'auth=true';
          router.push({ path: '/' });
        }).catch( () => {
          commit('SHOW_ERROR');
          commit('ERROR_MESSAGE', 'Wrong username or password');
        });
      },
      loggedIn ({ commit }) {
        commit('LOGGED_IN_MESSAGE');
      }
    }
  });

  const login = Vue.component('login', {
    template: '#login',
    computed: {
      username () {
        return this.$store.getters.username;
      },
      password () {
        return this.$store.getters.password;
      }
    },
    methods: {
      setUsername (e) {
        this.$store.dispatch('setUsername', e.target.value);
      },
      setPassword (e) {
        this.$store.dispatch('setPassword', e.target.value);
      },
      loginSend () {
        this.$store.dispatch('login');
      }
    }
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
      }
    },
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
      }
        
    }
  });

  const router = new VueRouter({
    mode: 'history',
    routes: [
      { path: '/', name: 'todoapp', component: todoapp },
      { path: '/login', name: 'login', component: login },
      { path: '*', redirect: {name: 'todoapp'} }
    ]
  });

  // app Vue instance
  new Vue({
    router,
    store,
    created() {
      if (getCookie('auth')) {
        this.$store.dispatch('loggedIn');
      }
    },
    computed: {
      errorMessage () {
        return this.$store.getters.errorMessage;
      },
      loggedIn() {
        return this.$store.getters.loggedIn;
      }
    }
  }).$mount('#app');

  function getCookie(name){
    var pattern = RegExp(name + '=.[^;]*');
    var matched = document.cookie.match(pattern);
    if(matched){
      // var cookie = matched[0].split('=');
      return true;
    }
    return false;
  }

  var el = document.getElementById('todo-list');
  if (el) {
    var sortable = Sortable.create(el, {
      animation: 150
    });
  } 

})();
