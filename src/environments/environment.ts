import { DashboardConfig } from '../app/dashboard/dashboard-config';
import { HelloWorldComponent } from '../app/dashboard/widgets/hello-world/hello-world.component';

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const dashConfig: DashboardConfig = {
  items: [
    { cols: 2, rows: 1, y: 0, x: 0, widget: { component: HelloWorldComponent } },
    { cols: 2, rows: 2, y: 1, x: 1, widget: { component: null } },
    { cols: 1, rows: 1, y: 0, x: 1, widget: { component: HelloWorldComponent } },
    { cols: 1, rows: 1, y: 2, x: 0, widget: { component: HelloWorldComponent } },
    { cols: 1, rows: 1, y: 0, x: 2, widget: { component: HelloWorldComponent } },
  ]
};

export const environment = {
  production: false,
  dashConfig: dashConfig
};
