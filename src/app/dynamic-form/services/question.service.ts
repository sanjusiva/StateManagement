import { Injectable } from '@angular/core';
import {
  TextboxQuestion,
  DropdownQuestion,
  CheckboxQuestion,
} from '../models/question-types';
import { QuestionBase } from '../models/question-base';

@Injectable({ providedIn: 'root' })
export class QuestionService {
  getQuestions(): QuestionBase<any>[] {
    return [
      new TextboxQuestion('name', 'Full Name', '', true, 'textbox'),
      new TextboxQuestion('email', 'Email', '', true, 'textbox', 'email'),
      new DropdownQuestion('gender', 'Gender', 'male', true, 'dropdown', '', [
        { key: 'male', value: 'Male' },
        { key: 'female', value: 'Female' },
      ]),
      new CheckboxQuestion(
        'subscribe',
        'Subscribe to Newsletter',
        false,
        false,
        'checkbox'
      ),
    ];
  }
}
