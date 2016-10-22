
function makeFriendlyDates(arr) {
  var result= [];
  function sp(str){
    var num=str.split('-');
    
    num=num.map(function pars(a){
      a=parseInt(a);
     return a;
    });
    
    
    result.push(num);
     }
  
  arr.forEach(sp);
  var string="";
  var date=[];
  function month(a){
    switch(a){
        case 1:
        string+="January ";break;
        case 2:
        string+="February ";break;
        case 3:
        string+="March ";break;
        case 4:
        string+="April ";break;
        case 5:
        string+="May ";break;
        case 6:
        string+="June ";break;
        case 7:
        string+="July ";break;
        case 8:
        string+="August ";break;
        case 9:
        string+="September ";break;
        case 10:
        string+="October ";break;
        case 11:
        string+="November ";break;
        case 12:
        string+="December ";break;
        
    }
  
  }
   function day(a){
     
  	if (a===1||a===21||a===31) {
  	string+=a+"st";	
  	}else if(a===2||a===22){
      string+=a+"nd";
    }else if(a===3){string+=a+"rd";}
     else{
       string+=a+"th";
     }
     date.push(string);
     
   }
  
  if(result[0][1]===result[1][1]&&result[0][0]===result[1][0]&&result[0][0]===2016){
   month(result[0][1]);
    day(result[0][2]);
     string ="";
    day(result[1][2]);
  }else if(result[0][0]===2016&&result[1][0]===2017){
   month(result[0][1]);
    day(result[0][2]);
     string ="";
    month(result[1][1]);
    day(result[1][2]);
  }else if(result[0][1]===result[1][1]&&result[0][0]===result[1][0]&&result[0][2]===result[1][2]){
    month(result[0][1]);
    day(result[0][2]);
    date[0]+=", "+result[0][0];
  }else if(result[0][0]===result[1][0]-1&&result[0][1]===result[1][1]&&result[0][2]>result[1][2]&&result[0][0]!==2016){
    month(result[0][1]);
    day(result[0][2]);
    date[0]+=", "+result[0][0];
    string ="";
    month(result[1][1]);
    day(result[1][2]);
  }else if(result[0][0]===result[1][0]){
    month(result[0][1]);
    day(result[0][2]);
    date[0]+=", "+result[0][0];
    string ="";
    month(result[1][1]);
    day(result[1][2]);
    
  }else{
    month(result[0][1]);
    day(result[0][2]);
    date[0]+=", "+result[0][0];
    string ="";
    month(result[1][1]);
    day(result[1][2]);
    date[1]+=", "+result[1][0];
  }
  
  
  
  

  return date;
}



makeFriendlyDates(['2016-07-01', '2016-07-04']);

