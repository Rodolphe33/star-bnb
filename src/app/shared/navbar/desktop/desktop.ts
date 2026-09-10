import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Menubar } from 'primeng/menubar';
import { Avatar } from 'primeng/avatar';
import { ButtonDirective } from 'primeng/button';
import { StyleClass } from 'primeng/styleclass';

@Component({
  imports: [Menubar, NgOptimizedImage, Avatar, ButtonDirective, StyleClass],
  selector: 'star-desktop',
  styleUrl: './desktop.css',
  templateUrl: './desktop.html',
})
export class Desktop {}
