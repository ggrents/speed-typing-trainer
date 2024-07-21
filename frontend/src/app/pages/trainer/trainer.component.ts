import { Component, inject, OnInit } from '@angular/core';
import { TextComponent } from './text/text.component';
import { InputComponent } from './input/input.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../shared/header/header.component';
import { InputService } from '../../services/input.service';
import { IResult } from '../../models/result.interface';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-trainer',
  standalone: true,
  imports: [
    TextComponent,
    InputComponent,
    KeyboardComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  templateUrl: './trainer.component.html',
  styleUrl: './trainer.component.scss',
})
export class TrainerComponent implements OnInit {
  private _inputService = inject(InputService);
  private _stateService = inject(StateService);
  userResult: IResult;
  showModal: boolean = false;

  ngOnInit(): void {
    this._stateService.trialProgress$.subscribe((_) => {
      if (_) this.hideModal();
    });
    this._inputService.userResult$.subscribe((result: IResult) => {
      this.userResult = result;
      this.showModal = true;
    });
  }

  hideModal() {
    this.showModal = false;
  }
}
