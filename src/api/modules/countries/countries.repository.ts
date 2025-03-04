import { countries } from "../../../db/countries";

export default class CountriesRepository {

  private items = countries;

  async get () {
    return this.items;
  }

  async getById (id: number) {
    return this.items.find (item => item.id === id);
  }

  async create (payload: any) {
    this.items.push (payload);

    return payload;
  }

  async update (id: number, payload: any) {

    const index = this.items.findIndex (item => item.id === id);

    this.items.splice(index, 1, payload);

    return payload;
  }

  async delete (id: number) {
    const index = this.items.findIndex (item => item.id === id);

    this.items.splice(index, 1);

    return {};
  }
}
