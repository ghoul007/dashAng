import { DashboardConfig } from '../app/dashboard/dashboard-config';

const dashConfig: DashboardConfig = {
  items: [
    {cols: 2, rows: 1, y: 0, x: 0},
    {cols: 2, rows: 2, y: 1, x: 1},
    {cols: 1, rows: 1, y: 0, x: 1},
    {cols: 1, rows: 1, y: 2, x: 0},
    {cols: 1, rows: 1, y: 0, x: 2},
  ]
};

export const environment = {
  production: true,
  dashConfig: dashConfig
};
