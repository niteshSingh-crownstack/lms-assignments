import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Note } from 'src/app/shared/note.module';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  animations: [
    trigger('itemAnim', [
      //Entry Animation
      transition('void=> *', [
        //Initial state
        style({
          height: 0,
          opacity: 0,
          transform: 'scale(0.85)',
          'margin-bottom': 0,
          // we have to 'expand' out the padding properties
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0,
        }),
        //we first want to animate the spacing (which includes height and margin)
        animate(
          '50ms',
          style({
            height: '*',
            'margin-bottom': '*',
            paddingTop: '*',
            paddingBottom: '*',
            paddingRight: '*',
            paddingLeft: '*',
          })
        ),
        animate(68),
      ]),
      transition('* => void', [
        // first scale up
        animate(
          50,
          style({
            transform: 'scale(1.05)',
          })
        ),
        // then scale down back to normal size while begining to fade out
        animate(
          50,
          style({
            transform: 'scale(1)',
            opacity: 0.75,
          })
        ),
        //scale down and fade out completely
        animate(
          '120ms ease-out',
          style({
            transform: 'scale(0.68)',
            opacity: 0,
          })
        ),
        //then animate the spacing(which includes height and margin)
        animate(
          '150ms ease-out',
          style({
            opacity: 0,
            height: 0,
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
          })
        ),
      ]),
    ]),

    trigger('listAnim', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({
              opacity: 0,
              height: 0,
            }),
            stagger(100, [animate('0.2s ease')]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class NotesListComponent implements OnInit {
  @ViewChild('filterInput') filterInputElRef: ElementRef<HTMLInputElement>;
  notes: Note[] = new Array<Note>();
  filteredNotes: Note[] = new Array<Note>();
  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.notes = this.notesService.getAll();
    setTimeout(() => {
      this.filter();
    }, 0);
  }
  ngAfterViewInit() {}

  deleteNote(note: Note) {
    let noteId = this.notesService.getId(note);
    this.notesService.delete(noteId);
    this.filter();
  }

  generateNoteUrl(note: Note) {
    let noteId = this.notesService.getId(note);
    return noteId;
  }

  filter() {
    let query = this.filterInputElRef.nativeElement.value;

    query = query.toLowerCase().trim();

    let allResults: Note[] = new Array<Note>();
    // split up the search query into individual words
    let terms: string[] = query.split(' '); // split on spaces
    // remove duplicate search terms

    terms = this.removeDuplicates(terms);
    // compile all relavant results into the allResults array
    terms.forEach((term) => {
      let results: Note[] = this.relevantNotes(term);
      // append result to the allResults array
      allResults = [...allResults, ...results];
    });
    // allResults will include duplicate notes
    // because a particular note can be the result of many search terms
    // but we don't want to show the same note multiple times
    //so we first must review
    let uniqueResults = this.removeDuplicates(allResults);
    this.filteredNotes = uniqueResults;

    // now sort by relavancy
    this.sortByRelavance(allResults);
  }
  removeDuplicates(arr: Array<any>) {
    let uniqueResults: Set<any> = new Set<any>();
    // loop through the input array and add the items to the set
    arr.forEach((e) => uniqueResults.add(e));
    return Array.from(uniqueResults);
  }
  relevantNotes(query: any) {
    query = query.toLowerCase().trim();
    console.log('typye', typeof query);
    let relevantNotes = this.notes.filter((note) => {
      if (note.title && note.title.toLowerCase().includes(query)) {
        return true;
      }
      if (note.body && note.body.toLowerCase().includes(query)) {
        return true;
      }
      return false;
    });
    return relevantNotes;
  }
  sortByRelavance(searchResults: Note[]) {
    // This method will calculate the relavancy of a note based on the number
    // of times it appears in the search result

    let noteCountObj: Object = {}; // format - key:value => NoteId:number (note object id : count)

    searchResults.forEach((note) => {
      let noteId = this.notesService.getId(note); // get the notes id

      if (noteCountObj[noteId]) {
        noteCountObj[noteId] += 1;
      } else {
        noteCountObj[noteId] = 1;
      }
    });

    this.filteredNotes = this.filteredNotes.sort((a: Note, b: Note) => {
      let aId = this.notesService.getId(a);
      let bId = this.notesService.getId(b);

      let aCount = noteCountObj[aId];
      let bCount = noteCountObj[bId];

      return bCount - aCount;
    });
  }
}
