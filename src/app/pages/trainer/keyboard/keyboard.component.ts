import { Component } from '@angular/core';

interface IKey {
  pushed: boolean;
  mark: string;
}

@Component({
  selector: 'app-keyboard',
  standalone: true,
  imports: [],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.scss'
})

export class KeyboardComponent {
  keyboardButtons: IKey[] = [
    { pushed: false, mark: "й" },
    { pushed: false, mark: "ц" },
    { pushed: false, mark: "у" },
    { pushed: false, mark: "к" },
    { pushed: false, mark: "е" },
    { pushed: false, mark: "н" },
    { pushed: false, mark: "г" },
    { pushed: false, mark: "ш" },
    { pushed: false, mark: "щ" },
    { pushed: false, mark: "з" },
    { pushed: false, mark: "х" },
    { pushed: false, mark: "ъ" },
    { pushed: false, mark: "ф" },
    { pushed: false, mark: "ы" },
    { pushed: false, mark: "в" },
    { pushed: false, mark: "а" },
    { pushed: false, mark: "п" },
    { pushed: false, mark: "р" },
    { pushed: false, mark: "о" },
    { pushed: false, mark: "л" },
    { pushed: false, mark: "д" },
    { pushed: false, mark: "ж" },
    { pushed: false, mark: "э" },
    { pushed: false, mark: "я" },
    { pushed: false, mark: "ч" },
    { pushed: false, mark: "с" },
    { pushed: false, mark: "м" },
    { pushed: false, mark: "и" },
    { pushed: false, mark: "т" },
    { pushed: false, mark: "ь" },
    { pushed: false, mark: "б" },
    { pushed: false, mark: "ю" },
    { pushed: false, mark: "ё" },
];

  
}
