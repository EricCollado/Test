import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home'},
    { title: 'Historia', url: '/historia', icon: 'globe'},
    { title: 'Servicios', url: '/servicios', icon: 'build'},
    { title: 'Noticias', url: '/noticias', icon: 'newspaper'},
    { title: 'Videos', url: '/videos', icon: 'videocam'},
    { title: 'Albergues', url: '/albergues', icon: 'home'},
    { title: 'Mapa', url: '/mapa', icon: 'map'},
    { title: 'Medidas', url: '/medidas', icon: 'list'},
    { title: 'Miembros', url: '/miembros', icon: 'people'},
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}

