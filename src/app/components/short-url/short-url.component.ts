import { Component } from '@angular/core';
import { ShortUrlService } from 'src/app/services/short-url.service';
import { ToastrService } from 'ngx-toastr';
import { MsjError } from '../../components/models/message'

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent {
  public nombreUrl:string = '';
  public urlShort:string = '';
  public urlProcesada:boolean = false;
  public loading:boolean = false;

  constructor(private _shortUrl: ShortUrlService,
              private toastr: ToastrService){}

  procesarUrl(){
    if (this.nombreUrl == '')  {
      this.toastr.error(MsjError.url_vacia, 'Error')
      return
    };

    this.urlProcesada = false;
    this.loading = true;
    this._shortUrl.getUrlShort(this.nombreUrl).subscribe( data => {
    
      const { link } = data;
      this.urlProcesada = true;
      this.urlShort = link;
      this.loading = false;
    }, error => {

      if(error.error.description === 'The value provided is invalid.') {
        this.toastr.error(MsjError.url_invalida, 'Ups');
        this.loading = false;
      }
      
    })
  }

}
