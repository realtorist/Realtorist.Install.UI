import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbAutocompleteModule, NbButtonModule, NbCardModule, NbFormFieldModule, NbInputModule, NbMenuModule, NbSpinnerModule, NbStepperModule } from '@nebular/theme';
import { NgxMaskModule } from 'ngx-mask';

import { ThemeModule } from '../@theme/theme.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppRoutingModule,
    ThemeModule,
    NbStepperModule,
    NbButtonModule,
    NbInputModule,
    NgxMaskModule,
    NbSpinnerModule,
    NbCardModule,
    NbAutocompleteModule,
    FormsModule,
    NbFormFieldModule
  ],
  declarations: [
    AppComponent,
  ],
})
export class AppModule {
}
