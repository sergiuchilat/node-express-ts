import CountriesRepository from './countries.repository';

export default class CountriesService {
  private countriesRepository = new CountriesRepository();

  async get() {
    return this.countriesRepository.get()
  }

  async getById(id: number) {
    return this.countriesRepository.getById(id)
  }

  async create(payload: any) {
    return this.countriesRepository.create(payload)
  }

  async update(id: number, payload: any) {
    return this.countriesRepository.update(id, payload)
  }

  async delete(id: number) {
    return this.countriesRepository.delete(id)
  }
}
