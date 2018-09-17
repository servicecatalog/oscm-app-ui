import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ConfigurationSettings} from '../../typings/api';

export interface ConfigurationSettingsDialogData {
  action: 'Create' | 'Edit';
  key: string;
  value: string;
}

@Component({selector: 'app-configuration-setting-dialog', templateUrl: 'template.html', styleUrls: ['style.scss']})
export class ConfigurationSettingsDialogComponent implements OnInit {
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<ConfigurationSettingsDialogComponent>,
              private _formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: ConfigurationSettingsDialogData) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      key: this.data.key || '',
      value: this.data.value || '',
    });
  }

  submit(): void {
    const config = {
      key: this.form.get('key').value,
      value: this.form.get('value').value,
    } as ConfigurationSettings;
    this.dialogRef.close(config);
  }
}
