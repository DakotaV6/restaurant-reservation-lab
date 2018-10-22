"use strict";
$(document).ready(() => {
    $(".table").on("mouseover", (event) => {
        $(event.target).fadeTo(500, 0.5);
    });

    $(".table").on("mouseout", (event) => {
        $(event.target).fadeTo(500, 1);
    });















});
