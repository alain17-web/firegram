// import * as firebase from 'firebase/app'
import {initializeApp} from 'firebase/app'
import { getFirestore } from '@firebase/firestore';
import { getStorage } from '@firebase/storage'

//import firebase from 'firebase/app'

import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC_dKMxeIXpuxp86Rskuqc-BG22UjZQ7l4",
    authDomain: "firegram-9b45b.firebaseapp.com",
    projectId: "firegram-9b45b",
    storageBucket: "firegram-9b45b.appspot.com",
    messagingSenderId: "198472199592",
    appId: "1:198472199592:web:b75bc8aeab5b060f66819d"
  };

  initializeApp(firebaseConfig)

const projectStorage = getStorage()
const projectFirestore = getFirestore()


export {projectFirestore,projectStorage}

  