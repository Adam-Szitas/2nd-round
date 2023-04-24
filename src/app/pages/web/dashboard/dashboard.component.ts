import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { catchError, of } from "rxjs";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent{

  public venues?: Venues<string>[];

  constructor(private httpClient: HttpClient){}

  public cardDetails = {
    price: "50.00",
    label: "Cash in voucher",
    validity: "24 hours",
    description: "You will receive your QR code in the next step and will be also e-mailed to ",
    email: "josef@gmail.com",
    buttonTitle: "purchase voucher",
  }

  public buttonClicked(): void{
    const headers = new HttpHeaders({
      'X-Master-Key': '$2b$10$5eRbA9CLdvKK/tsB5BCKle8W9Hi1sAkzEUwFpobWnEbg8bPiY2BK6'
    })

    this.httpClient.get('https://api.jsonbin.io/v3/b/631aee46a1610e63862444c0', {headers})
      .pipe(catchError((error: Error) =>
        {
          console.error(error);
          return of(false)
        }))
      .subscribe({
        next: (response: any) => {
          this.venues = response?.record?.venues;
        }
      })
  }
}

interface Venues<T>{
  id: T;
  address: T;
  city: T;
  hours: T;
  lat: T;
  link: T;
  lng: T;
  name: T;
  postcode: T;
  telephone: T;
}
