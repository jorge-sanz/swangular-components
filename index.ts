import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ModuleWithProviders, provide, NgModule } from '@angular/core';

import { ApiSwaggerComponent } from './components/api-swagger/api-swagger.component';
export { ApiSwaggerComponent } from './components/api-swagger/api-swagger.component';
import { ApiMethodComponent } from './components/api-method/api-method.component';
export { ApiMethodComponent } from './components/api-method/api-method.component';

import { SwaggerService } from './services/swagger.service';
export { SwaggerService } from './services/swagger.service';

import { KeyValuePairsPipe } from './pipes/key-value-pairs.pipe';
export { KeyValuePairsPipe } from './pipes/key-value-pairs.pipe';

export * from './services/template.provider';
export * from './schema/2.0/swagger.schema';
import {Swagger} from './schema/2.0/swagger.schema';

export const SWANGULAR_COMPONENTS: any[] = [
  ApiSwaggerComponent,
  ApiMethodComponent
];

export const SWANGULAR_PROVIDERS: any[] = [
  SwaggerService
];
@NgModule({
    declarations: [
      ...SWANGULAR_COMPONENTS,
      KeyValuePairsPipe
    ],
    exports: [
      ...SWANGULAR_COMPONENTS
    ],
    imports: [
      BrowserModule,
      HttpModule
    ]
})
export class SwangularModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SwangularModule,
      providers: SWANGULAR_PROVIDERS
    };
  }
}