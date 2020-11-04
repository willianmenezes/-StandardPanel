import { Component, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { faEdit, faTrashAlt, faSearch, faCopy, faBell, faUser, faUserSlash } from '@fortawesome/free-solid-svg-icons';

import { TableLabel } from '../../core/models/table-label'
import { TableData } from '../../core/models/table-data'

@Component({
    selector: 'app-table-paginated',
    templateUrl: 'table-paginated.component.html',
    styleUrls: ['./table-paginated.component.scss']
})

export class TablePaginatedComponent implements OnChanges {

    icons = {
        faEdit, faTrashAlt, faSearch, faCopy, faBell, faUser, faUserSlash
    }

    @Input() tableLabel: TableLabel[];
    @Input() tableData: TableData<any> = null;
    @Input() showButtonEdit: boolean = true;
    @Input() showButtonView: boolean = true;
    @Input() showButtonRemove: boolean = true;
    @Input() showButtonCopy: boolean = false;
    @Input() showButtonStatus: boolean = false;
    @Input() showButtonNotification: boolean = false;
    @Input() configPage: any;

    @Output() editData = new EventEmitter<any>();
    @Output() configPageOutput = new EventEmitter<any>();
    @Output() viewData = new EventEmitter<any>();
    @Output() removeData = new EventEmitter<any>();
    @Output() showCopy = new EventEmitter<any>();
    @Output() showStatus = new EventEmitter<any>();
    @Output() showNotification = new EventEmitter<any>();

    public maxSize: number = 7;
    public directionLinks: boolean = true;
    public autoHide: boolean = false;
    public responsive: boolean = true;
    public labels: any = {
        previousLabel: '🢀',
        nextLabel: '🢂',
        screenReaderPaginationLabel: 'Pagination',
        screenReaderPageLabel: 'page',
        screenReaderCurrentLabel: `You're on page`
    };

    constructor() { }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes) {
        }
    }

    onPageChange(event) {
        this.configPage.currentPage = event;
        this.configPageOutput.emit(this.configPage);
    }

    edit(item: any) {
        this.editData.emit(item);
    }

    remove(item: any) {
        this.removeData.emit(item);
    }

    view(item: any) {
        this.viewData.emit(item);
    }

    copy(item: any) {
        this.showCopy.emit(item);
    }

    status(item) {
        this.showStatus.emit(item)
    }

    notification(item: any) {
        this.showNotification.emit(item);
    }
}