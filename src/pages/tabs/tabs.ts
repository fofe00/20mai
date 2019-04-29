import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPage } from  '../list/list';
import { ServedPage } from "../served/served";
import { NotServedPage} from "../not-served/not-served";


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  listPage=ListPage;
  servedPage=ServedPage;
  notServedPage=NotServedPage;

}
