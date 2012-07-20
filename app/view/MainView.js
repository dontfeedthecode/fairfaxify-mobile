Ext.define('Fairfaxify.view.MainView', {
    extend: 'Ext.navigation.View',
    alias: 'widget.MainView',
    requires: [
        'Fairfaxify.view.Articles'
    ],

    config: {
        id: 'MainView',
        items: [
            {
                xtype: 'articles',
                title: 'Articles'
            }
        ]
    }

});