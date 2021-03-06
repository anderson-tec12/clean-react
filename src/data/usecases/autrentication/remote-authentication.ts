import { HttpPostClient } from "@/data/protocols/http/http-post-client";

export class RemoteAutrentication{
  constructor(
    private readonly url:string,
    private readonly httpPostClient:HttpPostClient
    ){
  }

  async auth():Promise<void>{
    await this.httpPostClient.post({url:this.url})
    // return Promise.resolve()
  }
}