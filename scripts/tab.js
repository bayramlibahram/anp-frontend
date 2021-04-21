document.addEventListener("DOMContentLoaded", function () {
    try {
        document.getElementById("btnNewsOne").addEventListener("click", function (e) {
            e.preventDefault();
            openTab(event, "newsOne");
        });

        document
            .getElementById("btnNewsSecond")
            .addEventListener("click", function (e) {
                e.preventDefault();
                openTab(event, "newsSecond");
            });

        function openTab(evt, tabsName) {
            let i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");

            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(tabsName).style.display = "block";
            evt.currentTarget.className += " active";
        }
    } catch  {

    }
});
