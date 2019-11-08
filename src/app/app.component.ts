import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todoList';

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyA4t3VlrZxSnmK4i51iTfl_VKNAvxzebxM",
      authDomain: "todo-list-6a670.firebaseapp.com",
      databaseURL: "https://todo-list-6a670.firebaseio.com",
      projectId: "todo-list-6a670",
      storageBucket: "todo-list-6a670.appspot.com",
      messagingSenderId: "78990793236",
      appId: "1:78990793236:web:f844861a55f9ae71fa6501"
    };
    firebase.initializeApp(firebaseConfig);
  }

}
