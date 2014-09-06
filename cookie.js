/*
 * Cookie manipulation
 */
var cookie = (function () {
  function set(name, value, days, path) {
    var date, expires;

    if (days) {
      date = new Date();
      date.setTime(date.getTime() + (days * 864E5));
      expires = "; expires=" + date.toGMTString();
    } else {
      expires = "";
    }

    if (!path) {
      path = "/";
    }

    document.cookie = name + "=" + value + expires + "; path=" + path;
  }

  function get(name) {
    var nameEQ = name + "=", ca = document.cookie.split(';'), i, c;

    for (i = 0; i < ca.length; i++) {
      c = ca[i].trim();
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length);
      }
    }

    return null;
  }

  function remove(name) {
    set(name, "", -1);
  }

  return {
    set: set,
    get: get,
    remove: remove
  };
}());
