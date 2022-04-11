import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  menuItems: string[] = ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"];
}
