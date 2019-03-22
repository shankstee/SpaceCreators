
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

function generateRandomNumber(min, spread) {
    return Math.floor((Math.random() * spread) + min);
}

$("#random-planet-button").on("click", function () {
    const planetSize = generateRandomNumber(200, 300);
    const newDiv = $(`<div
        data-ptr-autospin="${generateRandomNumber(1000, 5000)}ms"
        data-ptr-angle="${generateRandomNumber(0, 360)}deg"
        data-ptr-glow="0 0 50px rgba(236,206,20,0.35), inset 33px 20px 50px rgba(0,0,0,0.5)"
        data-ptr-size="${planetSize}x${planetSize}"
        data-ptr-pattern="https://source.unsplash.com/random/800x400?sig=${generateRandomNumber(0, 1000)}"
        data-ptr-ringcolor="#${(Math.random()*0xFFFFFF<<0).toString(16)}"
        data-ptr-ringangle="${generateRandomNumber(0, 360)}deg"
        data-ptr-ring="${Math.random() >= 0.5}"
        class="planet ptr-shape">
        </div>`);
    $("#galaxyDiv").prepend(newDiv);

    newDiv.planetarium({
        space: "html, body"
    });
});
