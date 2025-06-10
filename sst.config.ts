/// <reference path="./.sst/platform/config.d.ts" />


export default $config({
  app(input) {
    return {
      name: "hipwell-uk-wesbsite",
      removal: input?.stage === "prod" ? "retain" : "remove",
      protect: ["prod"].includes(input?.stage),
      home: "aws",
      providers: {
        aws: {
          region: "eu-west-2",
        },
      }
    };
  },
  async run() {
    await import("./infra/web");
    await import("./infra/trigger");
  },
});
