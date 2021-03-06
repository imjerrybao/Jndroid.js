var Theme = new _Theme();
function _Theme() {

    this.createThemeTitle = function(t) {
        var v = new TextView();
        v.setText(t);
        v.setTextColor(R.color.theme);
        v.setTextSize(R.dimen.title);
        v.setGravity(Gravity.LEFT | Gravity.CENTER_VERTICAL);

        var lp = new LayoutParams(LayoutParams.FILL_PARENT, LayoutParams.WRAP_CONTENT);
        lp.setMargins(R.dimen.padding);
        lp.topMargin = R.dimen.paragraph_padding_top;
        v.setLayoutParams(lp);
        return v;
    };

    this.createTitle = function(t) {
        var v = new TextView();
        v.setText(t);
        v.setTextColor(R.color.text);
        v.setTextSize(R.dimen.title);
        v.setGravity(Gravity.LEFT | Gravity.CENTER_VERTICAL);
        return v;
    };

    this.createText = function(t) {
        var v = new TextView();
        v.setText(t);
        v.setStyle("fontWeight", "400");
        v.setTextColor(R.color.text);
        v.setTextSize(R.dimen.text);
        v.setGravity(Gravity.LEFT | Gravity.CENTER_VERTICAL);
        return v;
    };

    this.createSubText = function(t) {
        var v = new TextView();
        v.setText(t);
        v.setTextColor(R.color.sub_text);
        v.setTextSize(R.dimen.sub_text);
        v.setGravity(Gravity.LEFT | Gravity.CENTER_VERTICAL);
        return v;
    };

    this.createIconBtn = function(src, iconSize) {
        var btn = new MButton();
        btn.setDimBg(false);
        btn.setBorder(0, 0);
        btn.setBoxShadow(0, 0, 0, 0, 0);
        btn.onMeasure = function(wMS, hMS) {
            this.applyDimen(wMS, hMS);
            icon.measure(iconSize, iconSize);
        };
        btn.onLayout = function() {
            var x = (this.getMW() - iconSize) / 2;
            var y = (this.getMH() - iconSize) / 2;
            icon.layout(x, y);
        };

        var icon = new LiteImageView();
        icon.setImageUri(src);
        btn.addView(icon);
        return btn;
    };
}
