# Boiled Page JWT script

A simple JavaScript module for Boiled Page frontend framework to handle JWT web tokens.

## Install

Place `jwt.js` to `/assets/js` directory and add its path to `scripts` variable in `gulpfile.js` to be combined with other scripts.

## Methods

### Get header

`getHeader(token)` - Get header of a JSON web token.

Parameter | Type | Required | Description
----------|------|----------|------------
`token` | String | Yes | Token to get header from.

### Get payload

`getPayload(token)` - Get payload of a JSON web token.

Parameter | Type | Required | Description
----------|------|----------|------------
`token` | String | Yes | Token to get payload from.

### Check token is expired

`isExpired(expiratonTime)` - Check token is expired or not.

Parameter | Type | Required | Description
----------|------|----------|------------
`expiratonTime` | Number | Yes | Expiration timestamp.