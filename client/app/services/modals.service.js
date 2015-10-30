'use strict';

import angular from 'angular';
import messageTemplate from 'modals/message/message';
import messageController from 'modals/message/message.controller';

class ModalsService {
  /*@ngInject*/
  constructor($uibModal) {
    this.uibModal = $uibModal;
  }

  message(user) {
    this.uibModal.open({
      animation: true,
      template: messageTemplate,
      controller: messageController,
      controllerAs: 'vm',
      bindToController: true,
      resolve: {
        user: () => user
      }
    });
  }
}

export default angular
  .module('hemx.services.modals', [])
  .service('modalsService', ModalsService);