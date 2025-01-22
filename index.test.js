import { verifyTwitter } from "./verify-twitter.js";

test("X verification", async () => {
    const twitterAccount = "daria1283466/x";
    const proofUrl = "https://x.com/daria1283466";
    const anotherAccount = "vdar.testnet/near/testnet";
    const res = await verifyTwitter([twitterAccount, proofUrl, anotherAccount]);
    expect(res).toBeTruthy();
}, 200000);
