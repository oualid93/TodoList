import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  tasks: any[] = [];

  tasksSubject = new Subject<any>();

  constructor() { }

  emitTasks() {
    this.tasksSubject.next(this.tasks);
  }

  saveTasks(userId: string) {
    firebase.database().ref('/users/' + userId + '/list/').set(this.tasks);
  }

  getTasks(userId: string) {
    firebase.database().ref('/users/' + userId + '/list/').on('value', (data: any) => {
      this.tasks = data.val() ? data.val() : [];
      this.emitTasks();
    });
    // return new Observable((observer) => {
    //   if (this.tasks && this.tasks.length > 0) {
    //     observer.next(this.tasks);
    //     observer.complete();
    //   } else {
    //     const error = new Error('Tasks is not defined or is empty');
    //     observer.error(error);
    //   }
    // });
  }

  createTask(newTask: any, userId: string) {
    this.tasks.push(newTask);
    this.saveTasks(userId);
  }

  updateTask(task: any, index: number, userId: string) {
    this.tasks[index] = task;
    this.saveTasks(userId);
  }

  deleteTask(index: number, userId: string) {
    this.tasks.splice(index, 1);
    this.saveTasks(userId);
  }

}
