import axios, { AxiosInstance } from "axios";

class BaseService {
  client: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
      'x-apisports-key': import.meta.env.VITE_TOKEN,
      'x-rapidapi-host': 'v3.football.api-sports.io'
    }
  })
  moduleURL = "";

  /**
   *
   */
  constructor(moduleURL: string) {
    this.moduleURL = moduleURL;
  }

  protected async getAll() {
    return new Promise(async(resolve, reject) => {
      try {
        const {data} = await this.client.get(this.moduleURL)
        resolve(data.response)
      } catch (error) {
        reject(error)
      }
    })
  }

  protected async getById(id: string) {
    return new Promise(async(resolve, reject) => {
      try {
        const {data} = await this.client.get(`${this.moduleURL}?id=${id}`)
        resolve(data.response[0])
      } catch (error) {
        reject(error)
      }
    })
  }
  
  protected async getWithFilter(filter: string) {
    return new Promise(async(resolve, reject) => {
      try {
        const {data} = await this.client.get(`${this.moduleURL}?${filter}`)
        resolve(data.response)
      } catch (error) {
        reject(error)
      }
    })
  }
}

export { BaseService };
