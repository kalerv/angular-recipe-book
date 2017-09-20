import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: ['./header.component.css']
})
export class HeaderComponent{
    @Output() tabSelected = new EventEmitter<string>();
    onSelect(selectedTab: string){
        this.tabSelected.emit(selectedTab);
    }
}