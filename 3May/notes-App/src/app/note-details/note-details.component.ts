import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Note } from '../shared/note.module';
import { NotesService } from '../shared/notes.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss'],
})
export class NoteDetailsComponent implements OnInit {
  constructor(
    private notesService: NotesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  note: Note;
  ngOnInit(): void {
    // this.route.params.subscribe((params:Params))

    this.note = new Note();
  }

  onSubmit(form: NgForm) {
    // console.log(form);
    this.notesService.add(form.value);
    this.router.navigateByUrl('/');
  }
  cancel() {
    this.router.navigateByUrl('/');
  }
}
