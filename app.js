function tabFunctioning(event,container,id,anchorId){
    event.preventDefault()

    const anchors = document.getElementsByTagName("a")
    for(let i=0;i<anchors.length;i++){
        anchors[i].style.textDecoration="underline"
    }
    document.getElementById(anchorId).style.textDecoration = "none"

    const containerElements = document.getElementsByClassName(container)
    for(let i=0;i<containerElements.length;i++){
    containerElements[i].style.display="none"}

    document.getElementById(id).style.display="block"

}