import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Avatar } from 'primeng/avatar';
import { ButtonDirective } from 'primeng/button';
import { StyleClass } from 'primeng/styleclass';

@Component({
  imports: [NgOptimizedImage, Avatar, ButtonDirective, StyleClass],
  selector: 'star-desktop',
  styleUrl: './desktop.scss',
  templateUrl: './desktop.html',
})
export class Desktop {}
