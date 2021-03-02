
import { HttpPostClientSpy } from "../../test/mock-http-client"
import { RemoteAutrentication } from "./remote-authentication"

type SutTypes = {
  sut:RemoteAutrentication,
  httpPostClient: HttpPostClientSpy
}

const makeSut = (url:string = 'any_ur'):SutTypes => {
    // const url = 'any_url'
    const httpPostClient = new HttpPostClientSpy()
    const sut = new RemoteAutrentication(url, httpPostClient)

    return {
      sut,
      httpPostClient
    }
}

describe('RemoteAutrentication', () => {
  test('Should call HttpPOstClient with correct URL', async () => {
    const url = 'any_url'
    const {sut, httpPostClient} = makeSut(url)    
    await  sut.auth()   

    expect(httpPostClient.url).toBe(url)
  })
})