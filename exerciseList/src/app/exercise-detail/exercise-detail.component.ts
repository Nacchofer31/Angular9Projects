import { ExerciseService } from './../exercise.service';
import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from '../exercise';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.component.html',
  styleUrls: ['./exercise-detail.component.css']
})
export class ExerciseDetailComponent implements OnInit {

  exercise:Exercise;

  constructor(private route:ActivatedRoute, private exerciseService:ExerciseService) { }

  ngOnInit(): void {
    this.getExercise()
  }

  getExercise():void{
    const id =+ this.route.snapshot.paramMap.get('id')
    this.exerciseService.getExerciseById(id).subscribe(exercise=>this.exercise=exercise)
  }

}
