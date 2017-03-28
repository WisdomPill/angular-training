/**
 * Created by anas on 28/03/17.
 */
import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services/post.service";

@Component({
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {
  postId: number;
  sub;
  post: any;

  constructor(private route: ActivatedRoute,
              private postService: PostService) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.postId = +params['id'];
      this.postService.getById(this.postId).then(post => {
        this.post = post;
      }).catch(err => {
        console.error("something went wrong", err);
      });
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
