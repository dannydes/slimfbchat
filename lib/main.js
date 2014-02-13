exports.main = function() {
    var pageMod = require("sdk/page-mod");
    var data = require("sdk/self").data;
    //var sss = require("stylesheet-service");
    
    var searchCss = data.url("search.css");
    var messagesCss = data.url("messages.css");
    var eventsCss = data.url("events.css");
    var pokesCss = data.url("pokes.css");
    var postsCss = data.url("posts.css");

    pageMod.PageMod({
        include: "*.facebook.com",
        contentScriptFile: data.url("chat.js"),
        contentStyleFile: [data.url("global.css"),
                        data.url("chat.css"),
                        data.url("timeline.css")]
    });
    /*
    pageMod.PageMod({
        include: /https?:\/\/www.facebook.com\/messages\/\w*/,
        contentScriptFile: data.url("messages.js"),
        contentScript: "sss.loadStylesheet(messagesCss)"
    });
    
    pageMod.PageMod({
        include: /https?:\/\/www.facebook.com\/search\/.*/,
        contentScript: "sss.loadStylesheet(search.Css)",
        contentScriptWhen: "ready"
    });
    
    pageMod.PageMod({
        include: /https?:\/\/www.facebook.com\/events\/\d*/,
        contentScript: "sss.loadStylesheet(eventsCss)"
    });
    
    pageMod.PageMod({
        include: /https?:\/\/www.facebook.com\/pokes/,
        contentScript: "sss.loadStylesheet(pokesCss)"
    });
    
    pageMod.PageMod({
        include: /https?:\/\/www.facebook.com\/\w*\/posts\/\d*/,
        contentScript: "sss.loadStylesheet(postsCss)"
    });*/
};