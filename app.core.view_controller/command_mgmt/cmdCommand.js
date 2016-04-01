var cmdCommandService = require('../../app.core.model/command_mgmt/cmdCommandService');

function Controller(router) {
    var me = this;
    router.get('/cmdCommand', function(req, res) {
       me.doCmdCommand(req,res);
    });
};

Controller.prototype.doCmdCommand = function(req,res) {
    cmdCommandService.cmdCommand(req,function(data){
         res.send(data);
    });
};

module.exports = Controller;