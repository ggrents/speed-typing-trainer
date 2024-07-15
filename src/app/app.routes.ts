import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { TrainerComponent } from './pages/trainer/trainer.component';

export const routes: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'trainer', component: TrainerComponent},
];
