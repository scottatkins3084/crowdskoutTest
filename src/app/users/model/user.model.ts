export class UserModel {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;

  constructor(){
    this.id = null;
    this.name = '';
    this.username = '';
    this.email = '';
    this.address = new Address();
    this.phone = '';
    this.website = '';
    this.company = new Company();
  }
}

class Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;

  constructor() {
    this.street = '';
    this.suite = '';
    this.city = '';
    this.zipcode = '';
    this.geo = new Geo();
  }
}

class Geo {
  lat: string;
  lng: string;

  constructor() {
    this.lat = '';
    this.lng = '';
  }
}

class Company {
  name: string;
  catchPhrase: string;
  bs: string;

  constructor(){
    this.name = '';
    this.catchPhrase = '';
    this.bs = '';
  }
}
