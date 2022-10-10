            </div> <!-- body-content -->

            <?php
            Req::element("MenuFooter");
            Req::element("SvgReferences");
            ?>
        </div> <!-- body-scrollable-content -->
        
        <?php
        Req::element("GalleryOverlay");
        ?>
    </div> <!-- app -->

    <?php
    ResourceLoader::hook("body-bottom");
    ?>
</body>

</html>