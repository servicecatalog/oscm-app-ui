import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {ConfigurationSettings} from '../../typings/api';

@Component({selector: 'app-configuration-setting-dialog', templateUrl: 'template.html', styleUrls: ['style.scss']})
export class ConfigurationSettingsDialogComponent implements OnInit {
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<ConfigurationSettingsDialogComponent>,
              private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({});
  }

  submit(): void {
    const config = {} as ConfigurationSettings;
    this.dialogRef.close(config);
  }
}
