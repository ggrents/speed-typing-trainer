import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  RouterOutlet,
  RouterLink,
  ActivatedRoute,
  Router,
  NavigationEnd,
} from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        switch (this.router.url) {
          case '/trainer':
            this.selectedItem = 'start';
            break;
          case '/results':
            this.selectedItem = 'results';
            break;
          case '/custom':
            this.selectedItem = 'createTest';
            break;
          case '/settings':
            this.selectedItem = 'settings';
            break;
          case '/':
            this.selectedItem = '';
            break;
          default:
            this.selectedItem = '';
            break;
        }
      });
  }

  selectedItem: string;

  selectItem(item: string) {
    this.selectedItem = item;
  }
}
