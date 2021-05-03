import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data =[
    {name: 'Farid', age: 28, job: 'Lawyer', employed: true},
    {name: 'Saba', age: 27, job: 'Designer' , employed: false},
    {name: 'Jill', age: 27, job: 'Programmer',  employed: true}
  ];

  headers = [
    {key: 'employed' , label: 'Has a Job ?'},
    {key: 'name' , label: 'Name' },
    {key: 'age' , label: 'Age' },
    {key: 'job' , label: 'Job' }    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
