import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'cdk-sidemenu-item',
    templateUrl: './sidemenu-item.component.html',
    styleUrls: ['./sidemenu-item.component.scss']
})
export class SidemenuItemComponent implements OnInit {

    @Input() menu;
    @Input() iconOnly: boolean;
    @Input() secondaryMenu = false;
    whenClicked: boolean = false;
    isActive: boolean = false;
    isHover= false;
    showStyle: boolean =false;
    whenSubMenuItemClicked: boolean = false;
    constructor() { }

    ngOnInit() {
    }

    isItemActive() {
        this.isActive = !this.isActive;
        this.isHover = !this.isHover;
    }

    getStyle(){
        if(this.showStyle) {
            return "yellow";
          } else {
            return "";
          }
    }
    
    openLink() {
        this.menu.open = this.menu.open;
    }

    chechForChildMenu() {
        return (this.menu && this.menu.sub) ? true : false;
    }

}
