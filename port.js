
function bruno() {
    const aboutContent = document.getElementById("about-content");
    const aboutBox = new WinBox({
        title: "About Me",
        width: "400px",
        height: "400px",
        top: 120,
        right: 40,
        bottom: 40,
        left: 50,
        mount: aboutContent,
        onfocus: function () {
            this.setBackground("RGB(16 11 11)");
        },
        onblur: function () {
            this.setBackground("##9ab55d");
        },
        force_close: function(){

            this.close(true);
        }
    });
    
};


function hardik(){
   
    const contactContent = document.getElementById("contact-content");
    const contactBox = new WinBox({
        title: "Contact Me",
        background: "#00aa00",
        width: "400px",
        height: "400px",
        top: 150,
        right: 50,
        bottom: 50,
        left: 850,
        mount: contactContent,
        onfocus: function () {
            this.setBackground("RGB(16 11 11)");
        },
        onblur: function () {
            this.setBackground("#777");
        },
    });
};