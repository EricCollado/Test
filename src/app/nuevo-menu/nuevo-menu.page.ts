/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { TokenService } from 'app/token.service';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-nuevo-menu',
  templateUrl: './nuevo-menu.page.html',
  styleUrls: ['./nuevo-menu.page.scss'],
})
export class NuevoMenuPage implements OnInit {


  constructor(
    private serviToken: TokenService,
    private menuController: MenuController
  ) { }

  async ionViewDidEnter(){
    await this.menuController.enable(true, 'menu2');
    await this.menuController.enable(false, 'menu1');
  }

  async ionViewDidLeave() {
    await this.menuController.enable(true, 'menu1');
    await this.menuController.enable(false, 'menu2');
  }

  public token: Array<any> = [];


  ngOnInit() {

  }

}
