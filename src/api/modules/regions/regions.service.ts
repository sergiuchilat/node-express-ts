import RegionsRepository from './regions.repository';

export default class RegionsService {
  private regionsRepository = new RegionsRepository();

  async get() {
    return this.regionsRepository.get()
  }

  async getById(id: number) {
    return this.regionsRepository.getById(id)
  }

  async create(payload: any) {
    return this.regionsRepository.create(payload)
  }

  async update(id: number, payload: any) {
    return this.regionsRepository.update(id, payload)
  }

  async delete(id: number) {
    return this.regionsRepository.delete(id)
  }
}
