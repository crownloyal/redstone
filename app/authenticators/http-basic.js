import Ember from 'ember';
import BaseAuthenticator from 'ember-simple-auth/authenticators/base';

const { RSVP } = Ember;
const { service } = Ember.inject;

export default BaseAuthenticator.extend({

  authenticate() {
    return new RSVP.Promise((resolve, reject) => {
      this._super(identification, password).then((data) => {
        raw({
          url:      '/issues',
          type:     'GET',
          dataType: 'jsonp',
          data:     { 'grant_type': 'facebook_auth_code', 'auth_code': data.authorizationCode }
        }).then((response) => {
          resolve({
            // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
            access_token: response.access_token,
            // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
            provider: data.provider
          });
        }, reject);
      }, reject);
    });
  }

});
