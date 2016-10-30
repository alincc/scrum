import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef, MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { CreateProjectDialogComponent } from '../../common/create-project-dialog/create-project-dialog.component';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MdSnackBar]
})
export class HomeComponent implements OnInit {

  dialogRef: MdDialogRef<CreateProjectDialogComponent>;

  constructor(
    private projectService: ProjectService,
    public dialog: MdDialog,
    private snackBar: MdSnackBar,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
  }

  showMessage(title, message): void {
    let config = new MdSnackBarConfig(this.viewContainerRef);
    this.snackBar.open(message, title, config);
  }

  openDialog() {
    let config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;

    this.dialogRef = this.dialog.open(CreateProjectDialogComponent, config);

    this.dialogRef.afterClosed().subscribe(result => {
      if (result !== 'cancel') {
        this.projectService.create(result)
          .subscribe(data => {
            this.showMessage('Close', 'Project was added successfully');
          });
      }

      this.dialogRef = null;
    });
  }

}
