import { NestedTwoComponent } from './nested-two/nested-two.component';
import { NestedOneComponent } from './nested-one/nested-one.component';
import { GeneralComponent } from './general/general.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralAComponent } from './general-a/general-a.component';
import { GeneralBComponent } from './general-b/general-b.component';
import { GeneralCCComponent } from './general-c-c/general-c-c.component';
import { GeneralCComponent } from './general-c/general-c.component';


const routes: Routes = [{
    path: '',
    component: GeneralComponent,
    children: [
      {
        path: 'g1',
        component: GeneralAComponent
      },
      {
        path: 'g2',
        component: GeneralBComponent,
      },
      {
        path: 'g3',
        component: GeneralComponent,
        children: [{
          path: 'one',
          component: GeneralCCComponent,
          outlet: 'gthird'
        }, {
          path: '',
          component: GeneralCComponent
        }]
      }
    ]
  },
  {
    path: 'nest',
    component: NestedOneComponent,
    outlet: 'nested'
  },
  {
    path: 'nest1',
    component: NestedTwoComponent,
    outlet: 'nested'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
