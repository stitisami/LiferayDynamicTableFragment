$(".table-responsive.dynamic-table tbody tr").each(function() {
    if ($(this).find("td").filter(function() {
        return $(this).text().trim() !== "";
    }).length === 0) {
        $(this).remove();
    }
});

$(".table-responsive.dynamic-table td").each(function() {
    $(this).html($(this).html().replace(/##/g, "<br>"));
});

