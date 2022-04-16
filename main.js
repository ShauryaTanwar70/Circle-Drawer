canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouse_event="";
color="red";
width=2;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    (mouse_event=="mouseDown")
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouse_event="mouseUp"
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouse_event="mouseLeave"
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    if(mouse_event=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=2;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y, radius,0,2*Math.PI);
        ctx.stroke();
    }
    last_position_of_X=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
}