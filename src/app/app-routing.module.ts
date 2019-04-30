import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { BloggComponent } from './blogg/blogg.component';


const routes: Routes = [
  { path: 'blog', component: BlogsComponent},
  { path: 'blogg/:id', component: BloggComponent},


{ path: '**', pathMatch: 'full', component: BlogsComponent},
{ path: '', pathMatch: 'full', component: BlogsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
