import * as singleSpa from "single-spa";

// singleSpa.registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import<singleSpa.LifeCycles>(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

singleSpa.registerApplication({
  name: "@myorg/react-app",
  app: () => System.import("@myorg/react-app"),
  activeWhen: ["/react"],
});

singleSpa.registerApplication({
  name: "angular-app",
  app: () => System.import("angular-app"),
  activeWhen: ["/angular"],
});

// registerApplication({
//   name: "@myorg/navbar",
//   app: () => System.import("@myorg/navbar"),
//   activeWhen: ["/"]
// });

singleSpa.start({
  urlRerouteOnly: true,
});
