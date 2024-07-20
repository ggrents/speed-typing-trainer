import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { TrainerComponent } from './pages/trainer/trainer.component';
import { ResultsComponent } from './pages/results/results.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'trainer', component: TrainerComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'custom', component: TrainerComponent },
  { path: 'settings', component: TrainerComponent },
];
