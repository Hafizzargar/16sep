const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
   
  ];
  let n=data.length;
  let arr=[data[0],data[1]]
  
  // 1. Print Developers
  function printDeveloper() {
    for(let i=0;i<n;i++){
        if(data[i].profession==="developer"){
            console.log(data[i]);

        }
    }
  }
  
  // 2. Add Data
  function addData() {
    let name=prompt("enter name");
    let age=prompt("enter age");
    let profession=prompt("profession enter");
    let obj={ name : name, age: age, profession : profession};
    data.push(obj);
    console.log(obj);

  }
  
  // 3. Remove Admins
  function removeAdmin() {
    for(let i=0;i<n;i++){
        if(data[i].profession === "admin"){
            data.pop(data[i].profession);
            

        }
    }
    


  }
  
  // 4. Concatenate Array
  function concatenateArray() {}
  
  // 5. Average Age
  
  function averageAge() {


    let s=0;
    for(let i=0;i<n;i++){
        s=s+data[i].age;

    }
    console.log(s/n);
    
    

  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    for(let i=0;i<n;i++){
        if(data[i].age>=25){
            console.log(data[i]);

        }

    }


  }
  
  // 7. Unique Professions
  function uniqueProfessions() {}
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a,b)=>a.age-b.age);
    console.log(data);
    
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {


    for(let i=0;i<data.length;i++){
        if(data[i].name==="john"){
             data[i].profession="manager";
        console.log(data[i]);
             console.log("Updated successfully")
        }
   }
  }
  
  // 10. Profession Count
  function getTotalProfessions() {}