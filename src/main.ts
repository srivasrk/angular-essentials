import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//You can think of main.ts holding the first code to be
//executed in the final main.bundle.js file.

if (environment.production) {
  enableProdMode();
}


//start the app
platformBrowserDynamic().bootstrapModule(AppModule);
