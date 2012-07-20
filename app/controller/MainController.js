Ext.define('Fairfaxify.controller.MainController', {
    extend: 'Ext.app.Controller',
    config: {
        routes: {
            'articles/:id': 'ArticleListTap'
        },

        refs: {
            ArticleList: {
                selector: '#ArticleList',
                xtype: 'list'
            },
            MainView: '#MainView',
            ArticleView: {
                selector: '#ArticleView',
                xtype: 'ArticleViewPanel',
                autoCreate: true
            }
        },

        control: {
            "list": {
                itemtap: 'onListItemTap'
            }
        }
    },

    onListItemTap: function(dataview, index, target, record, e, options) {
        var MainView     = this.getMainView(),
        ArticleId    = record.get('id'),
        ArticleView  = this.getArticleView(),
        ArticleViewStore = Ext.getStore('ArticleViewStore');

        // Normally we would filter down an existing data store by ID, however
        // as each call has a different set of properties we will load them
        // seperately.
        ArticleViewStore.setProxy(
        {
            type: 'jsonp',
            url: 'http://limelightdigitalusa.com/fairfaxify/rest/article/' + ArticleId,
            reader: {
                type: 'json'
            }
        }
        );

        // Apply loading mask
        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            message: 'Loading article...'
        });

        // Load article
        ArticleViewStore.load({
            callback: function(records, operation, success) {
                // Push pseudo-view into port
                MainView.push({
                    title: record.get('header'),
                    tpl:   ArticleView.getTpl(),
                    data:  ArticleViewStore.data.items[0].data
                });
                // Remove loading mask
                Ext.Viewport.setMasked(false);
            },
            scope: this
        });
    },

    ArticleListTap: function(id) {

    }

});