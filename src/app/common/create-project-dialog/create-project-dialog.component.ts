import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from '../../models/project.interface';

@Component({
  selector: 'app-create-project-dialog',
  templateUrl: './create-project-dialog.component.html',
  styleUrls: ['./create-project-dialog.component.scss']
})
export class CreateProjectDialogComponent implements OnInit {

  private form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MdDialogRef<CreateProjectDialogComponent>
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.required]
    });
  }

  onSubmit(project: Project, valid: boolean): void {
    // Form need to be valid to submit
    if (valid) {
      this.dialogRef.close(project);
    }
  }

}
