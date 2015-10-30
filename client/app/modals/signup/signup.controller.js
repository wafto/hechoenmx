'use strict';

export default class SignupController {
  /*@ngInject*/
  constructor($uibModalInstance, ngNotify) {
    this.ngNotify = ngNotify;
    this.modal = $uibModalInstance;
  }

  handleSignup() {
    this.ngNotify.set('Instrucciones enviadas correctamente.');
    this.modal.close();
  }
}