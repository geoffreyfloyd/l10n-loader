module.exports = function(source) {
    this.cacheable();
    var l10nPattern = /\[l10n: ?(([^\|\]])*)(\|(([^\]])+))?\]/g;
    return source.replace(l10nPattern, '$1');
};
