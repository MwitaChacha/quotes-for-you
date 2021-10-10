import {
  QuoteMessage
} from './../quote-message';
import {
  Component,
  OnInit
} from '@angular/core';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {



  constructor() {}

  ngOnInit(): void {}

  quotes: QuoteMessage[] = [];

  quoteMessage!: string;
  quoteAuthor!: string;
  quoteUser!: string;
  newQuote: any;
  likes: number = 0;
  dislikes: number = 0;

  onSubmit() {
    let published = new Date();
    this.newQuote = new QuoteMessage(0, this.quoteMessage, this.quoteAuthor, this.quoteUser, this.likes, this.dislikes, published);
    this.quotes.push(this.newQuote);
  }

  quoteDelete() {

  }
  onLike() {
    this.likes++;
  }

  onDislike() {
    this.dislikes++;
  }
}
