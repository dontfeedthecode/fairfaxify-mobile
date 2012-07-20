Ext.define('Fairfaxify.store.ArticleStore', {
    extend: 'Ext.data.Store',
    alias: 'store.ArticleStore',
    requires: [
        'Fairfaxify.model.Article'
    ],

    config: {
        autoLoad: true,
        model: 'Fairfaxify.model.Article',
        storeId: 'ArticleStore',
        proxy: {
            type: 'jsonp',
            url: 'http://limelightdigitalusa.com/fairfaxify/rest/articles',
            reader: {
                type: 'json'
            }
        }
    }
});