/*
* 单击 Delete后删除员工信息
* 单击a标签后默认行为是自动跳转 可以在事件函数后使用return false阻止
* */

window.onload = function (){
    function delA() {
        var tr = this.parentNode.parentNode;
        var isDeleted = confirm("Are you sure to delete " +tr.children[0].innerHTML+ "'s information？");
        if(isDeleted){
            tr.parentNode.removeChild(tr);
        }
        return false;
    };


    var allA = document.getElementsByTagName("a");

    for(var i = 0;i < allA.length;i++){

        allA[i].onclick = delA;             //单击响应函数里this!=allA[i]：页面一加载循环即执行完毕，单击的时候i=allA.length，数组越界故此时allA[i]==undefined
    }

    var submitBtn = document.getElementById("addEmpButton");

    submitBtn.onclick = function () {
        //var employeeTable = document.getElementById("employeeTable");

        var inputName = document.getElementById("empName");
        var inputMail = document.getElementById("email");
        var inputSalary = document.getElementById("salary");

        var newTr = document.createElement("tr");

        var tdName = document.createElement("td");
        var tdMail = document.createElement("td");
        var tdSalary = document.createElement("td");
        var tdA = document.createElement("td");
        var aDelete = document.createElement("a");
        aDelete.onclick = delA;
        //name
        tdName.innerHTML = inputName.value;
        tdMail.innerHTML = inputMail.value;
        tdSalary.innerHTML = inputSalary.value;
        aDelete.innerHTML="Delete";
        aDelete.href = "javascript:;"

        tdA.appendChild(aDelete);
        newTr.appendChild(tdName);
        newTr.appendChild(tdMail);
        newTr.appendChild(tdSalary);
        newTr.appendChild(tdA);

        var tBodys = document.getElementsByTagName("tbody");
        var tBody = tBodys[0];
        tBody.appendChild(newTr);


    }
/*
* 也可以在tr.innerHTML直接添加HTML代码，并使用tr.getElementsByTagName();获取a标签，并设置；
* */
}
