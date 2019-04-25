import axios from 'axios';
import routes from './constants/backend.routes';

const url = process.env.BACKEND_URL;

const request = async (config, data) => {
  return axios({
    method: config.type,
    url: `${url}/${config.path}`,
    data
  });
};

export class TransportLayer {
  constructor(requestFacade = request) {
    this.request = requestFacade;
  }

  signIn = async form => {
    return this.request(routes.signIn, form);
  };
  signUp = async form => {
    return this.request(routes.signUp, form);
  };
}
