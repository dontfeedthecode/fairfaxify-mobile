Ext.define('Fairfaxify.store.ArticleViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.ArticleViewStore',
    requires: [
        'Fairfaxify.model.Article'
    ],

    config: {
        autoLoad: false,
        model: 'Fairfaxify.model.Article',
        storeId: 'ArticleViewStore',
        proxy: {
            type: 'jsonp',
            url: 'http://limelightdigitalusa.com/fairfaxify/rest/article',
            reader: {
                type: 'json'
            }
        }
    }
});