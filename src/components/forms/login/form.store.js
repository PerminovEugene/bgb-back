import { Form } from 'mobx-react-form';
import dvr from 'mobx-react-form/lib/validators/DVR';
import validatorjs from 'validatorjs';
import { observable } from 'mobx';

export default class LoginFormStore extends Form {
  authorStore;
  transportLayer;
  @observable todos = [];
  @observable isLoading = true;

  constructor(authorStore, transportLayer) {
    super();
    this.authorStore = authorStore;
    this.transportLayer = transportLayer;
  }
  /*
    Below we are returning a `plugins` object using the `validatorjs` package
    to enable `DVR` functionalities (Declarative Validation Rules).
  */
  plugins() {
    return {
      dvr: dvr(validatorjs)
    };
  }

  /*
    Return the `fields` as a collection into the `setup()` method
    with a `rules` property for the validation.
  */
  setup() {
    return {
      fields: [
        {
          name: 'email',
          rules: 'required|email|string|between:5,60'
        },
        {
          name: 'password',
          rules: 'required|string|between:5,25'
        }
      ]
    };
  }

  /*
    Event Hooks
  */
  hooks() {
    return {
      /*
        Success Validation Hook
      */
      async onSuccess(form) {
        const values = form.values();
        try {
          const loginResult = await this.transportLayer.signIn(values);
          debugger;
          console.log(loginResult);
        } catch (e) {
          console.warn(e);
        }

        // get field values
        console.log('Form Values!', form.values());
      },
      /*
        Error Validation Hook
      */
      onError(form) {
        // get all form errors
        console.log('All form errors', form.errors());
      }
    };
  }
}
