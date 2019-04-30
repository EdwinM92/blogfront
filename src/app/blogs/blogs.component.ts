import { Component, OnInit } from '@angular/core';
import { BlogService } from "../services/blog.service";


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  datos: Array<Object>;
  constructor(private _blogService: BlogService) { 
    
  this._blogService.getBlog().subscribe(response=>this.datos=response);;
  }
  
  ngOnInit() {
    console.log(this._blogService.getBlog()
    .subscribe(value => console.log(value)));
  }

}
