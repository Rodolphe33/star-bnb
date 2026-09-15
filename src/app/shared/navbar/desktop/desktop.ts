import { Component, effect } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Avatar } from 'primeng/avatar';
import { ButtonDirective } from 'primeng/button';
import { StyleClass } from 'primeng/styleclass';
import { Select } from 'primeng/select';
import { IftaLabelModule } from 'primeng/iftalabel';
import { Planet } from '../../models/planet';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputIcon } from 'primeng/inputicon';
import { Search } from '@primeicons/angular/search';
import { IconField } from 'primeng/iconfield';

@Component({
  imports: [
    NgOptimizedImage,
    Avatar,
    ButtonDirective,
    StyleClass,
    Select,
    IftaLabelModule,
    ReactiveFormsModule,
    InputIcon,
    Search,
    IconField,
  ],
  selector: 'star-desktop',
  styleUrl: './desktop.scss',
  templateUrl: './desktop.html',
})
export class Desktop {
  planets: Planet[] | undefined;

  form = new FormGroup({
    destination: new FormControl(''),
    date: new FormControl(''),
  });

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
  }
}
