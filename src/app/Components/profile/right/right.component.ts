import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewsService } from 'src/app/service/reviews.service';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  allUsers:any=[]
  user = new User;
  data:any;
  Reviews:any = [];
  constructor(private userService:UserService , private reviewService:ReviewsService,private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.userService.getUser(this.route.snapshot.params.id).subscribe(res =>{
      this.data = res;
      this.user = this.data;
      // console.log(this.user);
    });
    this.showReview();

    
    }
    showReview(){
      this.reviewService.showreviews(4).subscribe(res => {
        this.Reviews = res;
        console.log(res)
      });

    
  }
}


