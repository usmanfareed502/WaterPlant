import { Component } from '@angular/core';

@Component({
  selector: 'app-defaultlayout',
  templateUrl: './defaultlayout.component.html',
  styleUrls: ['./defaultlayout.component.scss']
})
export class DefaultlayoutComponent {

  constructor() { }
  public loadScript(url: string) {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

}
