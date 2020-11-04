import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-card-title',
    templateUrl: './card-title.component.html'
})

export class CardTitleComponent implements OnInit {

    @Input() classColorCard: string;

    constructor() { }

    ngOnInit() { }
}