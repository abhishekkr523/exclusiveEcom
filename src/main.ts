import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import {registerLicense} from '@syncfusion/ej2-base'
registerLicense("Ngo9BigBOggjHTQxAR8/V1NDaF5cWWtCf1NpRGtGfV5ycEVFallZTnVaUiweQnxTdEFiWX5fcHdQTmNZVUR+Xg==")
platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
