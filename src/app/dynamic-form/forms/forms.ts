import { Component } from '@angular/core';
import { QuestionControlService } from '../services/question-control.service';
import { QuestionService } from '../services/question.service';
import { QuestionBase } from '../models/question-base';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forms',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms {
 questions: QuestionBase<any>[] = [];
  form!: FormGroup;

  constructor(
    private questionService: QuestionService,
    private qcs: QuestionControlService
  ) {}

  ngOnInit() {
    this.questions = this.questionService.getQuestions();
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    console.log('Form Submitted:', this.form.value);
  }
}
