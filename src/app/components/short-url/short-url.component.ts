import { Component } from '@angular/core';
import { ShortUrlService } from 'src/app/services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent {

  inputUrl: string = ""
  shortUrl: string = ""
  error: any = { isError: false, message: "" }

  constructor(private shortUrlService: ShortUrlService) { }

  obtenerUrl() {
    if (this.inputUrl == "") {
      this.error.isError = true
      this.error.message = "Ingrese una url"

      setTimeout(() => {
        this.error.isError = false
      }, 2500)
      return
    }

    this.shortUrlService.getShortUrl(this.inputUrl).subscribe(data => {
      console.log(data)
      this.shortUrl = data.link
    }, err => {
      console.log(err)
      this.error.isError = true
      this.error.message = "Url inválida"

      setTimeout(() => {
        this.error.isError = false
      }, 2500)
    })
  }
}
