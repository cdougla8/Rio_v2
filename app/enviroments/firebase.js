import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

const config = {
  apiKey: 'AIzaSyDqpR4pH-ZddML6KugheKBDtkUm_YFn8k8',
  authDomain: 'project-rio-d0291.firebaseapp.com',
  databaseURL: 'https://project-rio-d0291.firebaseio.com',
  projectId: 'project-rio-d0291',
  storageBucket: 'project-rio-d0291.appspot.com',
  messagingSenderId: '1002873490693'
};

let instance = null;

class FirebaseService {
  constructor() {
    if (!instance) {
      this.app = firebase.initializeApp(config);
      firebase.firestore().settings({ timestampsInSnapshots: true });
      instance = this;
    }
    return instance;
  }
}

const firebaseService = new FirebaseService().app;
export default firebaseService;
