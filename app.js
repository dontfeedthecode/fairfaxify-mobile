Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    models: [
        'Article'
    ],
    stores: [
        'ArticleStore',
        'ArticleViewStore'
    ],
    views: [
        'MainView',
        'Articles',
        'ArticleView'
    ],
    name: 'Fairfaxify',
    controllers: [
        'MainController'
    ],

    launch: function() {

        Ext.create('Fairfaxify.view.MainView', {fullscreen: true});
    }

});
