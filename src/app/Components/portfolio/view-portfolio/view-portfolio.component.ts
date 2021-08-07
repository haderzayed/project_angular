import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { Portfolio } from 'src/app/_models/Portfolio';

@Component({
  selector: 'app-view-portfolio',
  templateUrl: './view-portfolio.component.html',
  styleUrls: ['./view-portfolio.component.css']
})
export class ViewPortfolioComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private portfolioService: PortfolioService,
    private router: Router
  ) {}

  freelancerName:string='John Do';

//   portfolioList:any[]=[ 1,
//     "Project1 Title",
//     " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor dicta libero alias doloremque aperiam quidem, odit totam, a expedita maxime quibusdam. Dicta quisquam consectetur facilis, dolor adipisci praesentium ut eaque",
//     "assets/portfolio1.jpg",
//     ['html' , 'css' , 'php'],
//     '#'
// ];

  portfolio:Portfolio = new Portfolio();
  data:any;

  ngOnInit(): void {
    this.portfolioService
      .getPortfolio(this.route.snapshot.params.id)
      .subscribe((res) => {
        this.data = res;
        this.portfolio = this.data;
      });
  }
}
