export const trigger = new sst.aws.Function(`deployTrigger-${$app.stage}`, {
    handler: "infra/githubTrigger.handler",
    url: true
})
