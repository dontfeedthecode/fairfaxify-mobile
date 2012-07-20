Ext.define('Fairfaxify.view.ArticleView', {
    extend: 'Ext.Panel',
    alias: 'widget.ArticleViewPanel',

    config: {
        docked: 'left',
        id: 'ArticleView',
        styleHtmlContent: true,
        width: '100%',
        tpl: [
            '<div class="article_info">',
            '	  <div><img src="{heroImage}"></div>',
            '	  <div class="article_info_body">{body}</div>',
            '	</div>'
        ]
    }

});