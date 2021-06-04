import {dataCollection} from './jsonData.js';


    let state={
        'dataSet':dataCollection,
        'page':1,
        "row":10,
    }

function pagination(dataSet,page,row){
        let starts=(page-1)*row;
        let rowsPage=dataSet.slice(starts,starts+row);
        let buttonPages=Math.ceil(dataSet.length/row);
        return{
           'rowpage':rowsPage,
            'pageNo':buttonPages
        }
    }


function buttonPage(page){
    let btn=document.querySelector(".buttonContainer");
    btn.innerHTML="";

    for(let i=1; i<page+1; i++){
        btn.innerHTML+= `<button type="button" value=${i} class="page">${i}</button>`
    }
    buttonClick()
}
function buttonClick(dta){
    let tv=document.querySelectorAll(".tr");
    let btnName=document.querySelectorAll(".page");
    btnName.forEach(element=>{
        element.addEventListener("click",(e)=>{
        tv.forEach(ele=>{
            ele.remove()
        });
        state.page=element.value;
        console.log("hi");
        table() 
        })
        
    })
}
buttonClick()
function table(){
    let data=pagination(state.dataSet,state.page,state.row);
    let tbody=document.querySelector(".tbody");
    let dataCollect=data.rowpage;

    for(let i=0;i<dataCollect.length;i++){
        let tr=document.createElement("tr");
        tr.setAttribute("class","tr");
        tbody.append(tr);
        let tdId=document.createElement("td");
        tdId.innerText=dataCollect[i].id;
        let tdName=document.createElement("td");
        tdName.innerText=dataCollect[i].name;
       
        let tdEmail=document.createElement("td");
        tdEmail.innerText=dataCollect[i].email;
        tr.append(tdId,tdName,tdEmail);
    } 
    buttonPage(data.pageNo)
    
}
table();