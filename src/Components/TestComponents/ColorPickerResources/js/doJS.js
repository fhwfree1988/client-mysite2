let myColor = "#0000ff";
function PickColor(){
    $('#colorSelector').ColorPicker({
        color: '#0000ff',
        onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);
            return false;
        },
        onChange: function (hsb, hex, rgb) {
            myColor = '#' + hex;
            $('#colorSelector div').css('backgroundColor', myColor);

        }
    });
}
export {myColor};
export default PickColor;


