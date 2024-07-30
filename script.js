document.addEventListener("DOMContentLoaded",()=>{
    function counter(id,start,end1,duration){
        let obj=document.getElementById(id),
        current=start;
        let range=end1 - current
        let increment=end1>current ?1:-1
        let steps=Math.abs(Math.floor(duration/range))
        let time=setInterval(()=>{
            current+=increment;
            obj.textContent=current+'+';
            if(current==end1){
                clearInterval(time)
            }
        },steps)
    }
    counter("count1",0,1287,3000);
    counter("count2",100,5786,2500);
    counter("count3",0,1400,3000);
    counter("count4",0,7100,3000);

    function onClickAction(){
        alert("This Function Is Not Working Right Now")
    }
    let btn1=Document.getElementById("btn1");
    btn1.addEventListener("click",onClickAction);
})