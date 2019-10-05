import Vuex from 'vuex';
import axios from 'axios'
import firebase from 'firebase/app'
import 'firebase/firestore' //if use firestore
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'

export const state = () => ({
  postsLoaded: [],
  token: null,
  commentsLoaded: [],
  count: 0,
  basketCart: [],
  busketPost: [],
  postsLoadedAll: []
})

export const mutations = {
  setPosts(state, posts) {
    state.postsLoaded = posts
  },
  addPost(state, post) {
    state.postsLoaded.push(post)
  },
  addPostBusket(state, post) {
    state.postsLoaded.push(post)
  },
  busketPost(state, post) {
    state.busketPost.push(post)
  },
  // Rus
  addPostRus(state, post) {
    state.postsLoadedRus.push(post)
  },
  // En
  addPostEn(state, post) {
    state.postsLoadedEn.push(post)
  },
  // All
  addPostAll(state, post) {
    state.postsLoadedAll.push(post)
  },
  editPost(state, postEdit) {
    const postIndex = state.postsLoaded.findIndex(post => post.id === postEdit.id)
    state.postsLoaded[postIndex] = postEdit
  },
  addComment(state, comment) {
    state.commentsLoaded.push(comment)
  },
  setToken(state, token) {
    state.token = token
  }
}

export const actions = {
  // По умолчанию выводим английские посты
  async nuxtServerInit({ commit }, contex) {
    return await axios.get('https://carrent-3303f.firebaseio.com/posts.json')
      .then(res => {
        const langPostRus = []
        for (let key in res.data) {
          langPostRus.push({ ...res.data[key], id: key })
        }
        commit('setPosts', langPostRus)
      })
      .catch(e => console.log(e))
  },
  authUser({ commit }, authData) {
    const key = 'AIzaSyDGP7QUgre6UPGae55_tXlJ6Og79jx-Dq8'
    return axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${key}`, {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    }).then((res) => {
      commit('setToken', res.data.idToken)
    }).catch(e => console.log(e))
  },
  addPost(vuexContext, post) {
    let key
    const createdPost = {
      mainImages: post.mainImages,
      imagesOne: post.imagesOne,
      imagesTwo: post.imagesTwo,
      imagesTree: post.imagesTree,
      imagesFour: post.imagesFour,
      nameCar: post.nameCar,
      nameCarEn: post.nameCarEn,
      doorCar: post.doorCar,
      usersCar: post.usersCar,
      typeCar: post.typeCar,
      typeCarEn: post.typeCarEn,
      brandCar: post.brandCar,
      kppCar: post.kppCar,
      ageCar: post.ageCar,
      gearCar: post.gearCar,
      vinCode: post.vinCode,
      descrCar: post.descrCar,
      descrCarEn: post.descrCarEn,
      priceOne: post.priceOne,
      priceTwo: post.priceTwo,
      priceTree: post.priceTree,
      priceFour: post.priceFour,
      priceFive: post.priceFive,
      primary: post.primary
    }
    firebase.database().ref('posts').push(createdPost)
      .then(result => {
        console.log(createdPost)
        key = result.key
        return key
      })
      .then(() => {
        vuexContext.commit('addPost', { ...createdPost, id: key })
      })
      .catch(e => console.log(e))
  },
  addPostBusket(vuexContext, post) {
    let key
    let ext
    let imageUrl
    const storage = firebase.storage();
    const storageRef = firebase.storage().ref();
    const createdPost = {
      mainImages: post.mainImages,
      imagesOne: post.imagesOne,
      imagesTwo: post.imagesTwo,
      imagesTree: post.imagesTree,
      imagesFour: post.imagesFour,
      nameCar: post.nameCar,
      nameCarEn: post.nameCarEn,
      brandCar: post.brandCar,
      doorCar: post.doorCar,
      usersCar: post.usersCar,
      typeCar: post.typeCar,
      typeCarEn: post.typeCarEn,
      kppCar: post.kppCar,
      ageCar: post.ageCar,
      gearCar: post.gearCar,
      vinCode: post.vinCode,
      descrCar: post.descrCar,
      descrCarEn: post.descrCarEn,
      priceOne: post.priceOne,
      priceTwo: post.priceTwo,
      priceTree: post.priceTree,
      priceFour: post.priceFour,
      priceFive: post.priceFive,
      primary: post.primary
    }
    firebase.database().ref('posts').push(createdPost)
      .then(result => {
        console.log(createdPost)
        key = result.key
        return key
      })
      .then(() => {
        vuexContext.commit('addPostBusket', { ...createdPost, id: key, imageUrl: imageUrl })
      })
      .catch(e => console.log(e))
  },
  addImages(vuexContext, post) {
    let key
    let ext
    let imageUrl
    const storage = firebase.storage();
    const storageRef = firebase.storage().ref();
    const createdPost = {
      title: post.title,
      lang: post.lang,
      content: post.content,
      html: post.html,
      updatedDate: new Date()
    }
    firebase.database().ref('images').push(createdPost)
      .then(result => {
        console.log(createdPost)
        key = result.key
        return key
      }).then(key => {
        const filename = post.image.name
        ext = filename.slice(filename.lastIndexOf('.'))
        return storage.ref('postImage/' + key + ext).put(post.image)
      })
      .then((data) => {
        return storageRef.child('postImage/' + key + ext).getDownloadURL()
      })
      .then(url => {
        imageUrl = url
        return firebase.database().ref('images').child(key).update({ imageUrl: imageUrl, updatedDate: new Date() })
      })
      .then(() => {
        console.log('br');
        console.log(createdPost);
        console.log('br');
        console.log(imageUrl);
        console.log('br');
        vuexContext.commit('addPost', { ...createdPost, id: key, imageUrl: imageUrl })
      })
      .catch(e => console.log(e))
  },
  // All - добавляем пост (на Все)
  addPostAll({ commit }, post) {
    return axios.post('https://carrent-3303f.firebaseio.com/posts.json', post)
      .then(res => {
        commit('addPostAll', { ...post, id: res.data.name })
      })
      .catch(e => console.log(e))
  },
  editPost({ commit }, post) {
    return axios.put(`https://carrent-3303f.firebaseio.com/posts/${post.id}.json`, post)
      .then(res => {
        commit('editPost', post)
      })
      .catch(e => console.log(e))
  },
  editPostBusket({ commit }, post) {
    return axios.put(`https://carrent-3303f.firebaseio.com/busketpost/${post.id}.json`, post)
      .then(res => {
        // commit('editPost', post)
        console.log("editPost");
      })
      .catch(e => console.log(e))
  },
  // busketPost
  busketPost({ commit }, post) {
    return axios.post('https://carrent-3303f.firebaseio.com/busketpost.json', post)
      .then(res => {
        commit('busketPost', { ...post[0] })
      })
      .catch(e => console.log(e))
  },
}

export const getters = {
  getPostsLoaded(state) {
    return state.postsLoaded
  },
  getBusketPost(state) {
    return state.busketPost
  },
  checkAuthUser(state) {
    return state.token != null
  }
}