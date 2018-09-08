import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;

  @Input() created_at = new Date();

  loveIts;

  constructor() {
    this.loveIts = 0;
  }

  ngOnInit() {
  }

  inclove(){
    this.loveIts++;
  }
  decLove(){
    this.loveIts--;
  }

}
