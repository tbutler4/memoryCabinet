import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ //add implenents OnInit if OnInit is a thing
	title = 'Task Drawer';
	tasks = [];
	task = {};
	newTask = {};
	mode = "create";

	constructor(private _httpService: HttpService){
	}
	//constructor invokes the ngOnInit function... must import OnInit at top portion alongside component
	ngOnInit(){
		// this.task = {title: " ", description: " "}
    	this.getTasksFromService();
  	}

	getTasksFromService(){
		let observable = this._httpService.getTasks();
		observable.subscribe(data => {
		  // console.log("Got our tasks!", data);
		  this.tasks = data['documents'];
		  console.log("bladadadadadd", data)
		});
	}

	getOneTask(_id){
	    let observable = this._httpService.getTask(_id);
	    observable.subscribe(data => {
	      this.task = data['documents'];
	      console.log("vladadadadadd", data)
	    });
  	}

	createTask(){
		let observable = this._httpService.addTask(this.newTask);
		observable.subscribe(data => {
		  this.getTasksFromService();
		  this.newTask = {};
		});
	}

	updateTask(_id){
		console.log("the task is now", _id, this.task);
		let observable = this._httpService.editTask(_id, this.task);
		observable.subscribe(data => {
		  console.log(data, "heeeeerrreee");
		  this.mode = 'create';
		  this.getTasksFromService();
		});
	}

	changeMode(val){
		this.mode = val;
	}

	editTask(_id){
		this.mode = 'edit';
		this.getOneTask(_id);
		console.log("here*******", _id)
	}

	deleteTask(_id){
		let observable = this._httpService.deleteTask(_id);
		observable.subscribe(data => {
		  console.log(data);
		  this.getTasksFromService();
		});
	}



}
