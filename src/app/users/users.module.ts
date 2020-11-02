import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { CardsComponent } from './cards/cards.component';
import { StoreModule } from '@ngrx/store';
import * as fromUser from './store/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/user.effects';


@NgModule({
  declarations: [ListComponent, FormComponent, CardsComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromUser.usersFeatureKey, fromUser.reducer),
    EffectsModule.forFeature([UserEffects]),
    FormsModule
  ]
})
export class UsersModule { }
