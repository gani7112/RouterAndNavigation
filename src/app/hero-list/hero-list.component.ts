import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(data=>console.log(data))
    this.activatedRoute.queryParamMap.subscribe(data=>console.log(data))
    console.log(this.activatedRoute.snapshot.paramMap)
  }

}
