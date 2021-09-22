import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NbStepperComponent, NbToastrService } from '@nebular/theme';
import { IInstallApi } from '../@core/abstractions/install.api';
import { InstallModel } from '../@core/models/install.model';

import * as momentTZ from 'moment-timezone';

@Component({
  selector: 'ngx-app',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  @ViewChild('stepper') stepper: NbStepperComponent;

  model: InstallModel = {
    websiteAddress: '',
    websiteName: '',
    websiteTitle: '',
    timezone: '',
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
    confirmPassword: ''
  };

  isInstalling = false;
  timezones = momentTZ.tz.names();

  isValidTimezone() {
    return !!this.model.timezone && this.timezones.indexOf(this.model.timezone) >= 0;
  }

  getFilteredOptions(options: string[], currentValue: string) {
    if (!currentValue) return options;

    return (options || []).filter(
      (option) =>
        option.toLocaleLowerCase().indexOf(currentValue.toLocaleLowerCase()) >= 0
    );
  }

  constructor(private readonly api: IInstallApi, private readonly toastrService: NbToastrService) {}

  public install() {
    this.isInstalling = true;
    this.api.install(this.model)
      .subscribe(
        () => this.stepper.next(), 
        () => this.toastrService.danger('There were some errors during the installation. Please verify that you have completed all the steps and try again', 'Installation has failed'),
        () => this.isInstalling = false);
  }
}
