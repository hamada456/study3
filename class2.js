(() => {
    const $elm = document.querySelector("#js-accordion");
    const $trigger = $elm.getElementsByTagName("a");

    const triggerLen = $trigger.length;
    let index = 0;
    while(index < triggerLen){
        $trigger[index].addEventListener("click",(e) => clickHandler(e));
        index++;
    }

    $trigger[0].addEventListener("click", (e) => clickHandler(e));

    const clickHandler = (e) => {
        e.preventDefault();
            
        const $content = $trigger[0].nextElementSibling;
        if($content.style.display === "block"){
            $content.style.display = "none";
        } else {
            $content.style.display = "block";
        }

    };

})();
