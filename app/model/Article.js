Ext.define('Fairfaxify.model.Article', {
    extend: 'Ext.data.Model',
    alias: 'model.Article',
    config: {
        fields: [
            {
                allowNull: false,
                name: 'id'
            },
            {
                allowNull: false,
                name: 'header'
            },
            {
                allowNull: false,
                name: 'description'
            },
            {
                name: 'thumbnailHref'
            },
            {
                name: 'heroImage'
            },
            {
                name: 'body'
            }
        ]
    }
});