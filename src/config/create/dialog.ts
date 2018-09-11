import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({selector: 'app-create-config-dialog', templateUrl: 'template.html', styleUrls: ['style.scss']})
export class CreateConfigDialogComponent {
  constructor(public dialogRef: MatDialogRef<CreateConfigDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
