function Employee(){
    this.name="";
    this.dept="general";
}
Employee.prototype.toString=function(){
    console.log("Name: "+this.name+" Dept: "+this.dept);
}

function Manager(){
    this.reports=[];
}
Manager.prototype=new Employee;
Manager.prototype.toString=function(){
    console.log("Name: "+this.name+" Dept: "+this.dept+" Reports: "+this.reports);
}

function WorkerBee(){
    this.projects=[];
}
WorkerBee.prototype=new Employee;
WorkerBee.prototype.toString=function(){
    console.log("Name: "+this.name+" Dept: "+this.dept+" Projects: "+this.projects);
}

function SalesPerson(){
    this.dept="sales";
    this.quota=100;
}
SalesPerson.prototype=new WorkerBee;
SalesPerson.prototype.toString=function(){
    console.log("Name: "+this.name+" Dept: "+this.dept+" Projects: "+this.projects+" Quota: "+this.quota);
}

function Engineer(){
    this.dept="engineering";
    this.machine="";
}
Engineer.prototype=new WorkerBee;
Engineer.prototype.toString=function(){
    console.log("Name: "+this.name+" Dept: "+this.dept+" Projects: "+this.projects+" Machine: "+this.machine);
}

var mark=new Employee;
mark.toString();

var luis=new Manager;
luis.toString();

var jesus= new WorkerBee;
jesus.toString();

var nuria=new SalesPerson;
nuria.toString();

var belen= new Engineer;
belen.toString();