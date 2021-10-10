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

  quotes: QuoteMessage[] = [];

  quoteMessage!: string;
  quoteAuthor!: string;
  quoteUser!: string;
  newQuote: any;
  likes: number = 0;
  dislikes: number = 0;


  constructor() {}

  ngOnInit(): void {}

  // Events Listeners Present in the Quote Form

  onSubmit() {
    let published = new Date();
    this.newQuote = new QuoteMessage(0, this.quoteMessage, this.quoteAuthor, this.quoteUser, this.likes, this.dislikes, published);
    this.quotes.push(this.newQuote);
  }

  onDelete(index: number): void {
    this.quotes.splice(index, 1)
  }

  onLike(index: number): void {
    const currentList = this.quotes;
    const subjectQuote = currentList[index];
    subjectQuote.likes = subjectQuote.likes +  1;
  }

  onDislike(index: number): void {
    const currentList = this.quotes;
    const subjectQuote = currentList[index];
    subjectQuote.dislikes = subjectQuote.dislikes +  1;
  }
}
