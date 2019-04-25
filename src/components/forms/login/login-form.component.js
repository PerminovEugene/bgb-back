import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import withStyles from '@material-ui/core/styles/withStyles';
import FormHelperText from '@material-ui/core/FormHelperText';

const styles = theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

const LoginForm = observer(({ form, classes }) => {
  console.log(form);
  return (
    <form className={classes.form}>
      <FormControl margin="normal" error={form.$('email').error} required fullWidth>
        <InputLabel htmlFor="email">Email Address</InputLabel>
        <Input id="email" autoComplete="email" autoFocus {...form.$('email').bind()} />
        <FormHelperText>{form.$('email').error}</FormHelperText>
      </FormControl>

      <FormControl margin="normal" required fullWidth error={form.$('password').error}>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          id="password"
          type="password"
          autoComplete="current-password"
          {...form.$('password').bind()}
        />
        <FormHelperText>{form.$('password').error}</FormHelperText>
      </FormControl>
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={form.onSubmit}
      >
        Sign in
      </Button>
      <Button
        type="button"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={form.onClear}
      >
        Clear
      </Button>
    </form>
  );
});

export default withStyles(styles)(LoginForm);
