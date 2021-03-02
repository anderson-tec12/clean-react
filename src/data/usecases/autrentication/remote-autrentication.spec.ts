import { HttpPostClient } from "@/data/protocols/http/http-post-client"
import { RemoteAutrentication } from "./remote-authentication"


describe('RemoteAutrentication', () => {
  test('Should call HttpPOstClient with correct URL', async () => {
    class HttpPostClientSpy implements HttpPostClient{
      url?: string

      async post (url:string):Promise<void>{
        this.url = url
        return Promise.resolve()
      }
    }

    const url = 'any_url'
    const httpPostClient = new HttpPostClientSpy()
    const sut = new RemoteAutrentication(url, httpPostClient)
    await  sut.auth()
    

    expect(httpPostClient.url).toBe(url)
  })
})