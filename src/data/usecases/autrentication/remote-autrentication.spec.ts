interface HttpPostClient{
  post(url:string):Promise<void>
}

class RemoteAutrentication{
  constructor(
    private readonly url:string,
    private readonly httpPostClient:HttpPostClient
    ){
  }

  async auth():Promise<void>{
    await this.httpPostClient.post(this.url)
    // return Promise.resolve()
  }
}

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