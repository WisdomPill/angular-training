/**
 * Created by anas on 28/03/17.
 */
import {Component, OnInit} from "@angular/core";
import {PostService} from "../../services/post.service";

@Component({
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostListComponent implements OnInit {
  data: Array<any> = [];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getAll().then((data: Array<any>) => {
      this.data = data;
    }).catch(err => {
      console.error("Something went wrong", err);
    });
  }
}
