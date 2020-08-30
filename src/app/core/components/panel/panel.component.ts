import { Component, OnInit } from '@angular/core';

import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

// CONSTANTS
declare const $: any;

@Component({
    selector: 'app-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

    icons = {
        faFolderOpen
    }

    ngOnInit(): void {
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        });
    }
    
    title = 'basePanel';
}
