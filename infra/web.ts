const region = aws.getRegionOutput().name;

export const bucket = new sst.aws.Bucket(`HipwellUKWebsite-WebsiteContent-${$app.stage}`, {
    access: "public"
});

export const front = new sst.aws.Astro(`HipwellUKWebsite-${$app.stage}`, {
    link: [bucket],
});
