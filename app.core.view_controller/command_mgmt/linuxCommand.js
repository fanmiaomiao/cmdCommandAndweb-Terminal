
var linuxCommandService = require('../../app.core.model/command_mgmt/linuxCommandService');
function Controller(router) {
	var me = this;
	router.get('/linuxCommand',function(req,res) {
		me.doLinuxCommand(req,res);

	});
};
Controller.prototype.doLinuxCommand = function(req,res) {

	var path = '/linuxCommand';
	res.send('http://127.0.0.1:2437/terminal');
};
module.exports = Controller;
