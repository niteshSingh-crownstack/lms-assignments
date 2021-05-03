import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
})
export class NoteCardComponent implements OnInit {
  @Input() title: String;
  @Input() body: String;

  @ViewChild('truncator') truncator!: ElementRef<HTMLElement>;
  @ViewChild('bodyText') bodyText!: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) {}
  ngAfterViewInit() {
    // work out if there is a text overflow and if not, then hide the truncator
    // console.log(this.bodyText);
    let style = window.getComputedStyle(this.bodyText.nativeElement, null);

    let viewableHeight = parseInt(style.getPropertyValue('max-height'), 10);

    // console.log(viewableHeight);
    if (this.bodyText.nativeElement.scrollHeight > viewableHeight) {
      // if there is a text overflow, show the fade out truncator
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
    } else {
      // else  (there is text overflow), hide the fade out truncator
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
    }
  }
  ngOnInit(): void {}
}
