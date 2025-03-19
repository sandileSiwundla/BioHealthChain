import { PinataSDK } from "pinata";

const pinata = new PinataSDK({
  pinataJwt: process.env.PINATA_JWT!,
  pinataGateway: "example-gateway.mypinata.cloud",
});

const file = new File(["hello world!"], "hello.txt", { type: "text/plain" })
const upload = await pinata.upload.file(file)