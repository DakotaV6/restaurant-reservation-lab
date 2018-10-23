"use strict";
$(document).ready(() => {
    $(document)
        // Hover event for tables
        .on("mouseover", ".available", (event) => {
            $(event.target).fadeTo(500, 0.5);
        })
        .on("mouseout", ".available", (event) => {
            $(event.target).fadeTo(500, 1);
        })
        // Available table - display reservation form, activate save button
        .on("click", ".available", (event) => {
            $(".res-form").css("display", "flex");
            saveRes(event.target);
        });

    // Save button submit - hide form, add reserved, remove available
    function saveRes(tableClicked) {
        // Change subtitle to current table number
        $(".res-sub-title").text(`Table Number: ${$(tableClicked).text()}`);

        $(".res-save").on("click", () => {
            $(".res-form").css("display", "none");
            $(tableClicked).addClass("reserved")
                .removeClass("available")
                .unbind("mouseover")
                .unbind("click");
        });
    };

    // When "x" is pressed on form, close form and reset save button
    $("#close-form").on("click", () => {
        $(".res-form").css("display", "none");
        $(".res-save").unbind("click");
    });








});
