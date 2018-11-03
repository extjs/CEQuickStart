/*
Ext.define('Tunes.view.TunesView', {
    extend: 'Ext.dataview.DataView',
    xtype: 'tunesview',
    scrollable: true,
    cls: 'bg',
    itemCls: 'video',
    itemTpl: [
        '<figure>',
        '<img src="{image}" />',
        '<figcaption><b>{title}</b><br/>{artist}</figcaption><br/>',
        '</figure>'
    ]
});
*/

/*
Ext.define('ModernTunes.view.TunesView', {
    extend: 'Ext.dataview.DataView',
    xtype: 'tunesview',
    scrollable: true,
    cls: 'tunes-view',
    layout: {
        type: 'box',
        pack: 'space-around',
        wrap: true
    },
    itemCls: 'video',
    itemTpl: [
        '<figure>',
            '<figure class="thumbnail" style="background-image:url(\'{image}\')"></figure>',
            '<figcaption>',
                '<span class="title">{title}</span><br />',
                '<span class="artist">{artist}</span>',
            '</figcaption>',
        '</figure>'
    ]
});

*/

/*

Ext.define('ModernTunes.view.TunesView', {
    extend: 'Ext.dataview.DataView',
    xtype: 'tunesview',
    scrollable: true,
    cls: 'tunes-view',
    layout: {
        type: 'box',
        pack: 'space-around',
        wrap: true
    },
    itemCls: 'video',
    itemTpl: [
        '<figure>',
        '<img src="{image}" />',
        '<figcaption><b>{title}</b><br/>{artist}</figcaption><br/>',
        '</figure>'
    ]
});

*/

Ext.define('ModernTunes.view.TunesView', {
    extend: 'Ext.dataview.DataView',
    xtype: 'tunesview',
    scrollable: true,
    cls: 'tunes-view',
    layout: {
        type: 'box',
        pack: 'space-around',
        wrap: true
    },
    itemCls: 'video',
    itemTpl: [
        '<figure>',
        '<div class="thumbnail" style="background-image:url(\'{image}\')"></div>',
        '<figcaption><div class=\'title\'>{title}</div><div class=\'artist\'>{artist}</div></figcaption>',
        '</figure>'
    ]
});