import Auth from "./script/Auth";
import Fetch from "./script/Fetch";
import Login from "./script/Login";
import Post from './script/Post';
import {query} from './script/utils'

export default class App {
  constructor(root) {
    this.root = root
    this.auth = new Auth()
    this.loginModal = new Login(this.root)
    this.state = {
      isLogin: this.auth.isAuth(),
      posts: [],
      loginModalform: null,
      loginModalContainer: null,
    }
    this.url = "https://graphqlzero.almansi.me/api";
    this.config = query() 
    this.fetch = new Fetch(this.url, this.config)
  }

  remove(el) {
    this.root.removeChild(el)
  }

  showElement(el) {
    const url = el.dataset.id
    
    this.state.posts.forEach(el => {
      try {
        this.remove(el.el)
      } catch (error) {

      }
    })
    this.root.append(el)
    history.pushState(null, null, url)
  }

  addListeners() {
    const form = this.state.loginModalForm
    try {
      this.state.posts.forEach(post => {
        post.el.addEventListener('click', (evt) => {
          this.showElement(evt.currentTarget)
          
        })
      })
        form.addEventListener('submit', (evt) => {
        evt.preventDefault()
        const login = form.querySelector('[data-type="login"]')
        const password = form.querySelector('[data-type="password"]')
        const {
          isAuth,
          status
        } = this.auth.authenticated(login.value, password.value)
        if (!isAuth) {
          alert(status)
        } else {
          this.state.isLogin = isAuth
          this.remove(this.state.loginModalContainer)
          this.init()
        }
      })
    } catch (error) {
    }
  }

  async init() {
    if (!this.state.isLogin) {
      this.loginModal.render()
      this.state.loginModalForm = this.loginModal.element
      this.state.loginModalContainer = this.loginModal.container
    } else {
      if (this.state.posts.length === 0) {
        const {
          data
        } = await this.fetch.request()
        data.posts.data.forEach(el => {
          const post = new Post(this.root, el.title, el.body, el.id)
          this.state.posts.push(post)
          post.render()
        })
      }
    }
    this.addListeners()
  }
}