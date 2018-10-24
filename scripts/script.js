"use strict";
$(document).ready(() => {
    let container = null;
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
            container = event.target;
            $(".res-form").fadeIn().css("display", "flex");

            // Change subtitle to current table number
            $(".res-sub-title").text(`Table Number: ${$(container).text()}`);
        })
        // Save button submit - hide form, add reserved, remove available
        .on("click", ".res-save", () => {

            $(container)
                .addClass("reserved")
                .attr("partyName", $("input").eq(0).val())
                .attr("partySize", $("input").eq(2).val())
                .removeClass("available")
            // .unbind("click");

            // Clears inputs
            $("input").each(function () {
                $(this).val("");
            })

            $(".res-form").fadeOut();
        });

    // When "x" is pressed on form, close form and reset save button
    $("#close-form").on("click", () => {
        $(".res-form").fadeOut();
        $(".res-save").unbind("click");
    });

    $(document)
        .on("mouseenter", ".reserved", (event) => {
            if ($(event.target).attr("partyName") && ($(event.target).attr("partySize"))) {
                $(event.target).append(`
            <section class="tooltip">
                <p class="name">Name: ${$(event.target).attr("partyName")}</p>
                <p class="party">Size of party: ${$(event.target).attr("partySize")}</p>
            </section>
            `);
            }
        })
        .on("mouseleave", ".reserved", () => {
            $(".tooltip").remove();
        });




});
