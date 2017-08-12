"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var TodoAppComponent_1 = require("./components/TodoAppComponent");
var AppLocator_1 = require("./AppLocator");
// store
var AppStoreGroup_1 = require("./store/AppStoreGroup");
// use-case
var CreateDomainUseCase_1 = require("./usecase/CreateDomainUseCase");
// context
var almin_1 = require("almin");
//import AlminLogger from "almin-logger";
// instances
var dispatcher = new almin_1.Dispatcher();
// context connect dispatch with stores
var appContext = new almin_1.Context({
    dispatcher: dispatcher,
    store: AppStoreGroup_1.default.create()
});
// start logger
//const logger = new AlminLogger();
//logger.startLogging(appContext);
// Singleton
AppLocator_1.default.context = appContext;
// initialize domain
appContext.useCase(CreateDomainUseCase_1.CreateDomainUseCaseFactory.create()).execute().then(function () {
    // entry point
    ReactDOM.render(React.createElement(TodoAppComponent_1.default, { appContext: appContext }), document.getElementById("todoapp"));
});
//# sourceMappingURL=index.js.map