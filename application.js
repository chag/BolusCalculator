$(document).ready(function() {
});

function getDose(bs) {
    return(Math.round((bs - $("input[name=Target]").val()) / $("input[name=Divisor]").val()));
}

function lpad(n, width, z) {
    z = z || '&nbsp;';
    n = n.toString();
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

Date.prototype.toYMD = function() {
    return(lpad(this.getFullYear(), 4, '0') + '-' + lpad(this.getMonth()+1, 2, '0') + '-' + lpad(this.getDate(), 2, '0'));
};
