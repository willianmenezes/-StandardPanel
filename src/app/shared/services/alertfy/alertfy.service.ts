import { Injectable } from '@angular/core'

import * as alertfy from 'alertifyjs';

import { AlertfyEnum } from '../../../core/models/alertfy.enum';

@Injectable({
    providedIn: 'root'
})
export class AlertFyService {

    message(message: string, type: AlertfyEnum) {

        if (type === AlertfyEnum.Success) {

            alertfy.success(message)
        }

        if (type === AlertfyEnum.Warning) {

            alertfy.warning(message)
        }
        
        if (type === AlertfyEnum.Error) {

            alertfy.error(message)
        }
    }
}