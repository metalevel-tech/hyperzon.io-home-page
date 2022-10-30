<div id="footer-content" class="footer">
    <div class="footer__grid">
        <div class="footer__col">
            <div class="footer__title">
                Services
            </div>

            <div class="footer__content">
                <?php
                $menu_items = Menu::getItems();

                foreach ($menu_items as $item) {
                    if ($item["item_id"] != 0 && in_array("service-item", $item["class_list"])) {
                        printf(
                            '<div class="footer__content-menu__item">
                                <a href="%s" class="%s" aria-label="%s">
                                    <span class="label-footer">%s</span>
                                </a>
                            </div>',
                            $item["uri"],
                            implode(" ", $item["class_list"]),
                            $item["label_mobile"],
                            $item["label_mobile"]
                        );
                    }
                }
                printf("\n");
                ?>

                <div><a role="button" onclick="return false;">Walmart Marketing</a></div>
            </div>
        </div>

        <div class="footer__col">
            <div class="footer__title">
                Learn
            </div>
            <div class="footer__content">
                <div><a href="#" onclick="return false;">Coming soon!</a></div>
                <?php /* 
                <div><a href="#">HyperCast</a></div>
                <div><a href="#">Hyperzon Blog</a></div>
                <div><a href="#">HyperBoost</a></div>
                <div><a href="#">FREE E-book</a></div>
                */ ?>
            </div>
        </div>

        <?php /* 
        <div class="footer__col">
            <div class="footer__title">About Us</div>
            <div class="footer__content">
                <div><a href="#">Our Team</a></div>
                <div><a href="#">Partners</a></div>
                <div><a href="#">Careers</a></div>
                <div><a href="#">Success Stories</a></div>
            </div>
        </div>
        */ ?>

        <div class="footer__col">
            <div class="footer__title">
                Hyperzon Ltd.
            </div>
            <div class="footer__content">
                <div>
                    <a role="button" class="hover-disable">Broadway, Suite 1600</a>
                </div>
                <div>
                    <a role="button" class="hover-disable">Denver, Colo., 80202, USA</a>
                </div>
                <?php /* 
                <div class="footer__top-line"><a href="#">Privacy Policy</a></div>
                <div><a href="#">Terms of Service</a></div>
                <div><a href="#">Cookies</a></div>
                */ ?>
            </div>
        </div>

        <div class="footer__col">
            <div class="footer__title">
                Let's Connect
            </div>
            <div class="footer__content">
                <?php /* <div>M: +359 878 22 45 33</div> */ ?>
                <div>
                    <span>E: </span><a href="mailto:hello@hyperzon.io">hello@hyperzon.io</a>
                </div>
                <div class="footer__social">
                    <a target="_blank" aria-label="Hyperzon at Facebook" href="https://www.facebook.com/hyperzon/"><i class="fab fa-facebook-square"></i></a>
                    <a target="_blank" aria-label="Hyperzon at Instagram" href="https://www.instagram.com/hyperzon.io/"><i class="fab fa-instagram"></i></a>
                    <a target="_blank" aria-label="Hyperzon at LinkedIn" href="https://www.linkedin.com/company/hyperzon/"><i class="fab fa-linkedin"></i></a>
                    <a target="_blank" aria-label="Hyperzon at Vimeo" href="https://vimeo.com/hyperzon"><i class="fab fa-vimeo"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>