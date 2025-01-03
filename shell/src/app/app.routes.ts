import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'remote1',
    loadComponent: () =>
      loadRemoteModule('remote1', './Component').then((m) => m.RemoteCompComponent),
  },
  {
    path: 'remote2',
    loadComponent: () =>
      loadRemoteModule('remote2', './Component').then((m) => m.AppComponent),
  },
];
