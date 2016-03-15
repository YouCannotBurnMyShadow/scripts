/*
 * autoconfig.js
 * http://kb.mozillazine.org/Locking_preferences
 * https://developer.mozilla.org/en-US/Firefox/Enterprise_deployment
 *
 * Note: the file specified here will be expected to be located in the
 * installation directory, e.g. /usr/lib/firefox. Instead of putting our
 * configuration file there, we'll have to create a symlink to that location.
 * $ sudo ln -s /etc/firefox/mozilla.cfg /usr/lib/firefox/mozilla.cfg
 *
 */
pref("general.config.obscure_value", 0); // Do not obscure the content with ROT-13
pref("general.config.filename", "mozilla.cfg");