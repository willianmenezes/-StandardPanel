import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { AngularFireStorage } from '@angular/fire/storage'
import { v4 as uuid_v4 } from 'uuid'

import { Treinamento } from '../../../core/models/treinamento'

@Injectable({ providedIn: 'root' })
export class TreinamentoService {

    private treinamentosCollection: AngularFirestoreCollection<Treinamento> = this.firestore.collection('Treinamentos');

    constructor(
        private firestore: AngularFirestore,
        private fireStorage: AngularFireStorage
    ) { }

    buscarTreinamentos() {
        return this.firestore.collection<Treinamento>('Treinamentos', ref => ref.orderBy('titulo')).valueChanges();
    }

    buscarTreinamentoPorTitulo(titulo: string) {
        return this.firestore.collection('Treinamentos', ref => ref.where('titulo', '==', titulo.toLowerCase())).valueChanges();
    }

    cadastrarTreinamento(treinamento: Treinamento) {
        return this.treinamentosCollection.doc(treinamento.treinamentoId).set(treinamento);
    }

    editarTreinamento(treinamento: Treinamento) {
        return this.treinamentosCollection.doc(treinamento.treinamentoId).update(treinamento);
    }

    uploadDeArquivo(file: File, urlImagem: string, treinamentoId: string) {

        let path = `treinamentos/images/${treinamentoId}`

        if (urlImagem.length > 0) {
            this.fireStorage.storage
                .refFromURL(urlImagem)
                .delete()
                .then((response) => {

                    console.log(response);
                })
                .catch((error) => {

                    console.log(error);
                })
        }

        return this.fireStorage.upload(path, file);
    }

    baixarUrlImagem(treinamentoId: string) {

        let path = `treinamentos/images/${treinamentoId}`;

        return this.fireStorage.storage.ref(path).getDownloadURL();
    }
}