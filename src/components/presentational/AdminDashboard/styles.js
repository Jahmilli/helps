
exports.__esModule = true;
var styles_1 = require("@material-ui/core/styles");
exports.createSessionStyle = styles_1.makeStyles(function (theme) { return ({
    lockup: {
        textAlign: 'center'
    }
}); });
exports.AvailableSessionsStyle = styles_1.makeStyles(function (theme) { return ({
    displayIconLockup: {
        float: 'right',
        height: '25px',
        width: '25px',
        zIndex: 1,
        position: 'relative'
    },
    displayIcon: {
        height: '25px',
        width: '25px'
    }
}); });
