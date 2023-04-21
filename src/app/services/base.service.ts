import { Injectable } from "@angular/core";


@Injectable()
export class BaseService{
  protected readonly baseUrl: string = 'https://api.jsonbin.io/v3';
}
