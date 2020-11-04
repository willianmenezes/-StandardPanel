import { HttpErrorResponse } from '@angular/common/http';

declare const alertify: any;

export class ErrorMessage {

    public static ExibirMensagem(error: HttpErrorResponse) {

        if (error.error.errors) {

            for (var i in error.error.errors) {
                if (error.error.errors.hasOwnProperty(i)) {

                    alertify.error(error.error.errors[i][0]);
                }
            }
        } else if (error.error.mensagem) {

            alertify.error(error.error.mensagem);

        } else if (error.error) {

            alertify.error(error.error);
        } else {

            alertify.error("Verifique os dados por favor.");
        }

        console.log(error);
    }
}