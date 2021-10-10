import { QuoteMessage } from './../quote-message';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

  quotes: QuoteMessage[] = [];

  quoteMessage!: string;
  quoteAuthor!: string;
  quoteUser!: string;
  newQuote: any;
  likes!: number;

  onSubmit() {
    let published = new Date();
     this.newQuote = new QuoteMessage(0, this.quoteMessage, this.quoteAuthor, this.quoteUser, 0, 0, published);
     this.quotes.push(this.newQuote);
  }

  quoteDelete() {

  }
}
