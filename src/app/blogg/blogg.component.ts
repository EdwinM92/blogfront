import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BlogService } from '../../app/services/blog.service';



@Component({
  selector: 'app-blogg',
  templateUrl: './blogg.component.html',
  styleUrls: ['./blogg.component.css']
})
export class BloggComponent implements OnInit {

  blog:any[]=[];

  constructor(private _blogService: BlogService, private activeRouter: ActivatedRoute) { 

    this.activeRouter.params.subscribe(params => {
      console.log(params, this.blog);
      this.blog = _blogService.getBloge(params.id);
    });
    
  }
  ngOnInit() {
  }

}
