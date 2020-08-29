import { Component, OnInit } from '@angular/core';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

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
