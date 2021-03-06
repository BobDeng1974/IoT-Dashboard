import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './users.service';
import { TemperatureHumidityService } from './temperature-humidity.service';
import { ElectricityService } from './electricity.service';

const SERVICES = [
  UserService,
  TemperatureHumidityService,
  ElectricityService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class MockDataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: MockDataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
