/**
 * JWT - v1.0
 * Copyright 2020 Abel Brencsan
 * Released under the MIT License
 */

var JWT = (function(){

	'use strict';

	/**
	* Get header of a JSON web token. (public)
	* @param token string
	*/
	var getHeader = function(token) {
		return decodeToken(token.split('.')[0]);
	}

	/**
	* Get payload of a JSON web token. (public)
	* @param token string
	*/
	var getPayload = function(token) {
		return decodeToken(token.split('.')[1]);
	}

	/**
	* Check given date is expired. (public)
	* @param expiratonTime number
	*/
	var isExpired = function(expiratonTime) {
		if (Date.now() / 1000 <= expiratonTime) {
			return false;
		}
		return true;
	}

	/**
	* Decode a base64 encoded web token. (private)
	* @param base64URL string
	*/
	var decodeToken = function(base64URL) {
		return JSON.parse(decodeBase64Unicode(base64URL.replace('-', '+').replace('_', '/')));
	}

	/**
	* Decode a base64 ecoded string to UTF8 string. (private)
	* @param token string
	*/
	var decodeBase64Unicode = function(base64) {
		return decodeURIComponent(Array.prototype.map.call(atob(base64), function(c) {
			return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
		}).join(''))
	}

	return {
		getHeader: getHeader,
		getPayload: getPayload,
		isExpired: isExpired
	};

})();
