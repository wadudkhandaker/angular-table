



export const routes = [
  {
    path: "",
    redirectTo: "/table",
    pathMatch: "full"
  },
  {
    path: "table",
    loadChildren: () => import("./modules/table/table.module").then((m) => m.TableModule)
  },
  {
    path: "list",
    loadChildren: () => import("./modules/list/list.module").then((m) => m.ListModule)
  }
];
