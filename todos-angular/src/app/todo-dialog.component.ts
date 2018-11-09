import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import {Todo} from "./todo";

@Component({
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent implements OnInit {

  form: FormGroup;
  result: Todo = new Todo();
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<TodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: this.data.title ? this.data.title : '',
      description: this.data.description ? this.data.description : '',
      eventTime: this.data.eventTime ? this.data.eventTime : Date.now()
    })
  }

  submit(form) {
    this.result.title = form.value.title;
    this.result.description = form.value.description;
    this.result.eventTime = form.value.eventTime;
    this.dialogRef.close(this.result);
  }
}
