import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {Configuration} from '../../typings/api';

@Component({selector: 'app-create-config-dialog', templateUrl: 'template.html', styleUrls: ['style.scss']})
export class CreateConfigDialogComponent implements OnInit {
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<CreateConfigDialogComponent>,
              private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      controller: '',
      organization: '',
    });
  }

  submit(): void {
    const config = {
      controllerId: this.form.get('controller').value,
      organizationId: this.form.get('organization').value,
    } as Configuration;
    this.dialogRef.close(config);
  }
}
