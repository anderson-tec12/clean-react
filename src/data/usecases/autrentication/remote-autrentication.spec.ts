
import { HttpPostClientSpy } from "../../test/mock-http-client"
import { RemoteAutrentication } from "./remote-authentication"
import faker from 'faker'

type SutTypes = {
  sut:RemoteAutrentication,
  httpPostClient: HttpPostClientSpy
}

const makeSut = (url:string = faker.internet.url()):SutTypes => {
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
    const url = faker.internet.url()
    const {sut, httpPostClient} = makeSut(url)    
    await  sut.auth()   

    expect(httpPostClient.url).toBe(url)
  })
})