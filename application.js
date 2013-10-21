$(document).ready(function() {
    $("input").change(function() {
        $("input[name=Bolus]").val(Math.round((parseInt($("input[name=BloodSugarLevel]").val()) - parseInt($("input[name=Target]").val())) / parseInt($("input[name=Divisor]").val()) + 
            parseInt($("input[name=Carbohydrates]").val() || "0")/ parseInt($("input[name=CarbsPerUnit]").val())));
            
        /*$("input[name=Bolus]").val(
            Math.round(
                ((parseInt($("input[name=BloodSugarLevel]").val()) - parseInt($("input[name=Target]").val())) / parseInt($("input[name=Divisor]").val())) +
                (parseInt($("input[name=Carbs]").val()) / parseInt($("input[name=CarbsPerUnit]").val()))
            )
        );*/
    });
    
    $("input").keyup(function(event) {
        $(event.target).change();
    });
});

function lpad(n, width, z) {
    z = z || '&nbsp;';
    n = n.toString();
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

Date.prototype.toYMD = function() {
    return(lpad(this.getFullYear(), 4, '0') + '-' + lpad(this.getMonth()+1, 2, '0') + '-' + lpad(this.getDate(), 2, '0'));
};
