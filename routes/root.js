/**
 * Created by miaomiao on 2016/3/15.
 */
var express = require('express');

var router = express.Router();

var cmdCommand = require('./../app.core.view_controller/command_mgmt/cmdCommand');
var linuxCommand = require('./../app.core.view_controller/command_mgmt/linuxCommand');

new cmdCommand(router);
new linuxCommand(router);

module.exports = router;