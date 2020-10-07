import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalComponent} from './personal/personal.component';
import { ProfessionalComponent} from './professional/professional.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import {ContactComponent} from './contact/contact.component';
import { SkillsComponent} from './skills/skills.component';
import {ProjectsComponent } from './projects/projects.component'
const routes: Routes = [
  {
    path:'',
    component: PersonalComponent
  },
  {
    path:'professional',
    component:ProfessionalComponent
  }
];

@NgModule({
  declarations:[PersonalComponent,ProfessionalComponent,TestimonialsComponent,
    ContactComponent,SkillsComponent,ProjectsComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
