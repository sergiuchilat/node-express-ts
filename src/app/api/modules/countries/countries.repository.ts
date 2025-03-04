import { countries } from "../../../../db/countries";
import { Language} from "../../../../types/enums/language.enum";

export default class CountriesRepository {

  private items = countries;

  private mapItemLocalized(item: any, language: Language){
    return {
      id: item.id,
      name: item[`name_${language}`],
      capital: item[`capital_${language}`],
      area: item.area,
      population: item.population
    }
  }

  async get (language: Language) {
    return this.items.map(item => this.mapItemLocalized(item, language));
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
