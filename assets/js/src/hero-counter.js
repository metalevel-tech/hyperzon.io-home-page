/**
 * Hook "hero"
 *  @ Resources.php
 *  @ includes/Hero.php
 */
(function () {
    $(".counter").each(function () {
        const counter = $(this);
        const countTo = counter.attr("data-count");

        $({ countNum: counter.text() }).animate(
            {
                countNum: countTo
            },
            {
                duration: 3000,
                easing: "easeOutCubic",
                step: function () {
                    counter.text(Math.floor(this.countNum));
                },
                complete: function () {
                    counter.text(this.countNum);
                    //alert("finished");
                }
            }
        );
    });
})();
