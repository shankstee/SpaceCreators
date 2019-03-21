
$(".planet").planetarium({
    space: "html, body"
});

$("#newPlanetForm").submit(event=>{
    event.preventDefault();
    let newPlanetObj = {
        size:$('#newPlanetSize').val(),
        img:$('#newPlanetImg').val(),
        speed:$('#newPlanetSpeed').val(),
        angle:$('#newPlanetAngle').val(),
        ringAngle:$('#newPlanetRingAngle').val(),
        ringColor:$('#newPlanetRingColor').val(),
    }
    let newDiv = $(`<div data-ptr-autospin="${newPlanetObj.speed}ms" data-ptr-angle="${newPlanetObj.angle}deg" data-ptr-glow="0 0 50px rgba(236,206,20,0.35), inset 33px 20px 50px rgba(0,0,0,0.5)" data-ptr-size="${newPlanetObj.size}" data-ptr-pattern="${newPlanetObj.img}" data-ptr-ringcolor='${newPlanetObj.ringColor}' data-ptr-ringangle='${newPlanetObj.ringAngle}deg' data-ptr-ring='true' class="planet"></div>`)
    $('#galaxyDiv').prepend(newDiv)
    
    newDiv.planetarium({
        space:'html,body'
    })

})