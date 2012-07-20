Ext.define('Fairfaxify.view.Articles', {
    extend: 'Ext.Container',
    alias: 'widget.articles',

    config: {
        items: [
            {
                xtype: 'list',
                cls: [
                    'ArticleList'
                ],
                docked: 'left',
                id: 'ArticleList',
                itemId: 'ArticleList',
                width: '100%',
                itemTpl: [
                    '<div class="articlelistitem">',
                    '  <img src="{thumbnailHref}" class="article_thumbnail">',
                    '  <span class="article_heading">{header}</span>',
                    '  <span class="article_description">{description}</span>',
                    '</div>'
                ],
                store: 'ArticleStore'
            }
        ]
    }

});