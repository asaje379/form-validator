'use strict';
(() => {
  var e = class {
    static validate(t, r) {
      return t ? { isValid: !0 } : { isValid: !1, msg: r };
    }
    static required(t, r = 'Required') {
      return e.validate(String(t).length > 0, r);
    }
    static pattern(t, r, n = 'Invalid pattern') {
      return e.validate(new RegExp(t).test(r), n);
    }
    static min(t, r, n = 'Minimum value expected: {min}') {
      return e.validate(r >= t, n.replace('{min}', String(t)));
    }
    static max(t, r, n = 'Maximum value expected: {max}') {
      return e.validate(r <= t, n.replace('{max}', String(t)));
    }
    static url(t, r = 'Invalid URL') {
      return e.pattern('^https?://.+..+', t, r);
    }
    static email(t, r = 'Invalid email') {
      return e.pattern('.+@.+..{2,8}', t, r);
    }
    static password(t, r = 'Password not strong enough') {
      return e.pattern(
        '^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()-__+.]){1,}).{8,}$',
        t,
        r,
      );
    }
    static minLength(t, r, n = 'Minimum characters expected: {min}') {
      return e.validate(r.length >= t, n.replace('{min}', String(t)));
    }
    static maxLength(t, r, n = 'Maximum characteres expected: {max}') {
      return e.validate(r.length <= t, n.replace('{max}', String(t)));
    }
    static decimal(t, r = 'Decimal value expected') {
      return e.validate(String(t).includes('.'), r);
    }
    static alpha(t, r = 'Alphabetics characters only') {
      return e.pattern('^[a-zA-Z]+$', t, r);
    }
    static alphanum(t, r = 'Alphanumeric characters only') {
      return e.pattern('^[a-zA-Zd]+$', t, r);
    }
    static minDate(t, r, n = 'Must be recent than {min}') {
      return e.validate(
        new Date(t).getTime() < new Date(r).getTime(),
        n.replace('{min}', new Date(t).toLocaleDateString()),
      );
    }
    static maxDate(t, r, n = 'Must be recent than {max}') {
      return e.validate(
        new Date(t).getTime() > new Date(r).getTime(),
        n.replace('{max}', new Date(t).toLocaleDateString()),
      );
    }
  };
  var s = class {
    static required(t) {
      return (r) => e.required(r, t);
    }
    static pattern(t, r) {
      return (n) => e.pattern(t, n, r);
    }
    static min(t, r) {
      return (n) => e.min(t, n, r);
    }
    static max(t, r) {
      return (n) => e.max(t, n, r);
    }
    static url(t) {
      return (r) => e.url(r, t);
    }
    static email(t) {
      return (r) => e.email(r, t);
    }
    static password(t) {
      return (r) => e.password(r, t);
    }
    static minLength(t, r) {
      return (n) => e.minLength(t, n, r);
    }
    static maxLength(t, r) {
      return (n) => e.maxLength(t, n, r);
    }
    static decimal(t) {
      return (r) => e.decimal(r, t);
    }
    static alpha(t) {
      return (r) => e.alpha(r, t);
    }
    static alphanum(t) {
      return (r) => e.alphanum(r, t);
    }
    static minDate(t, r) {
      return (n) => e.minDate(t, n, r);
    }
    static maxDate(t, r) {
      return (n) => e.maxDate(t, n, r);
    }
    static validate(t, r) {
      let n = [],
        i = !0;
      for (let u of r) {
        let a = u(t);
        a.msg && n.push(a.msg), a.isValid || (i = !1);
      }
      return { isValid: i, messages: n };
    }
  };
})();
