<?php

/**
 * Created by PhpStorm.
 * User: nealv
 * Date: 03/04/15
 * Time: 10:23
 */
class SsoSession {
  /**
   * Store and retrieve variables from session
   *
   * @param $key
   *     Key to be set or got
   * @param $value
   *     Value to set for $key
   *
   * @return
   *     If only $key is given, sought-after value for $key
   */
  function _sso_session($key, $value = NULL) {
    if (isset($value)) {
      unset($_SESSION[$key]);
      $_SESSION[$key] = $value;
    }

    if (isset($_SESSION[$key])) {
      return $_SESSION[$key];
    }
  }

  function setStatus($status = NULL) {
    $this->_sso_session('sso_status', $status);
  }

  function getStatus() {
    return $this->_sso_session('sso_status');
  }
}
