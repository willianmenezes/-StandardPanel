import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'

import { CloudMessage } from '../../../core/models/cloud-message'

@Injectable({ providedIn: 'root' })
export class CloudMessageService {

    private clientesCollection: AngularFirestoreCollection<CloudMessage> = this.firestore.collection('App');

    constructor(
        private firestore: AngularFirestore,
        private http: HttpClient
    ) { }

    getCloudKey() {

        return this.clientesCollection.doc<CloudMessage>('notificacao').valueChanges();
    }

    postMessage(key: string, titulo: string, mensagem: string, tokenUser: string) {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': key
            })
        };

        var url = 'https://fcm.googleapis.com/fcm/send';

        let body = {
            to: tokenUser,
            "notification": {
                "body": mensagem,
                "title": titulo,
                "content_available": true,
                "priority": "high"
            },
            "data": {
                "body": mensagem,
                "title": titulo,
                "content_available": true,
                "priority": "high"
            }
        }

        return this.http.post(url, { ...body }, httpOptions);
    }
}