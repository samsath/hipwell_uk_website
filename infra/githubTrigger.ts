import https from "https";

const GITHUB_REPO = "";
const EVENT_TYPE = "trigger-from-lambda";

export const handler = async (event) => {
    if (event.requestContext.http.method !== "POST") {
        return {
            statusCode: 405,
            body: "Method Not Allowed",
        };
    }

    const body = JSON.parse(event.body ?? "{}");
    console.log('body: ', body);
    if (!body.secret) {
        return {
            statusCode: 403,
            body: JSON.stringify({ message: "Forbidden" }),
        };
    }

    const postData = JSON.stringify({
        event_type: EVENT_TYPE,
        client_payload: {
            triggeredBy: "lambda",
        },
    });
    console.log('post: ', postData);

    const options = {
        hostname: "api.github.com",
        path: `/repos/${GITHUB_REPO}/dispatches`,
        method: "POST",
        headers: {
            "User-Agent": "sst-lambda",
            Authorization: `Bearer ${body.secret}`,
            Accept: "application/vnd.github.v3+json",
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(postData),
        },
    };

    const githubRequest = () =>
        new Promise<{ statusCode: number; body: string }>((resolve, reject) => {
            const req = https.request(options, (res) => {
                let data = "";
                res.on("data", (chunk) => (data += chunk));
                res.on("end", () => resolve({ statusCode: res.statusCode || 500, body: data }));
            });

            req.on("error", reject);
            req.write(postData);
            req.end();
        });

    try {
        const response = await githubRequest();
        console.log('response: ', response);
        if (response.statusCode >= 200 && response.statusCode < 300) {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: "GitHub Action triggered." }),
            };
        } else {
            return {
                statusCode: response.statusCode,
                body: JSON.stringify({ error: "GitHub API call failed", details: response.body }),
            };
        }
    } catch (err: any) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: err.message }),
        };
    }
};
