import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from '../exercise';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.component.html',
  styleUrls: ['./exercise-detail.component.css']
})
export class ExerciseDetailComponent implements OnInit {

  @Input() exercise:Exercise;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getExercise
  }

  getExercise():void{
    const id =+ this.route.snapshot.paramMap.get('id')
  }

}
