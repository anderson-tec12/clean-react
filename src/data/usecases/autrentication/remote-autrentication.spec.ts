
import { HttpPostClientSpy } from "../../test/mock-http-client"
import { RemoteAutrentication } from "./remote-authentication"


describe('RemoteAutrentication', () => {
  test('Should call HttpPOstClient with correct URL', async () => {
    

    const url = 'any_url'
    const httpPostClient = new HttpPostClientSpy()
    const sut = new RemoteAutrentication(url, httpPostClient)
    await  sut.auth()
    

    expect(httpPostClient.url).toBe(url)
  })
})