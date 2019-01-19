import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

	tasks = {};

    constructor(private _http: HttpClient){
    	// this.getTasks();
    }

    getTasks(){
 		return this._http.get('/tasks');
 		
	}

	getTask(_id){
    return this._http.get(`/tasks/${_id}`);
  	}

	addTask(task){
		console.log('the task is', task);
    	return this._http.post('/task', task);
	}

	editTask(_id, task){
		console.log("updating the task with _id:", _id);
    	return this._http.put(`/tasks/update/${_id}`, task);
  	}
	deleteTask(_id){
		console.log("deleting task with _id:", _id);
	    return this._http.delete(`/tasks/remove/${_id}`);
	}}


