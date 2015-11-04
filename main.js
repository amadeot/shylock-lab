$(document).ready(function(){
	console.log('linked!');
	var ducats = 10000//starting ducat value
	var debtKeeper =[]//this is the debtor prison where all the debtors live with how much they owe
	var interestRate = .35//this is the interest rate
	var submit = function(event){
		if (event.keyCode===13){//hit enter
			console.log('great job pressing enter');//confirm
			$value = $('#prompt').val();//get value variable
			console.log($value);//confirm
			$createLi=$('<li>');//this variable makes a line
			$createLi.text($value);//the line created has whatever was put into the input box
			$('#log').append($createLi);//this appends the line to the ul
			$("#prompt").val("");//this resets the input box
			$valueArray=$value.split(" ");//this takes what was put into the input box and turns it into an array
			console.log($valueArray);//confirm
			var respond=function(response){//this function is called upon later to create the responses
				$createLiResponse=$('<li>');//this creates the line for responses
				$createLiResponse.text(response);//this creates the text in the line for responses
				$('#log').append($createLiResponse)};//this appends the text and the line for responses
			if ($value==='purse'){//if the value input is exactly purse
				return respond('*ShylockBot pulls out his purse containing '+ducats+' ducats*');//it returns this through the return function
			} else if ($valueArray[0]==='loan'){//if the first word typed in is loan
				ducats-=parseInt($valueArray[2]);//it subtracts the loan from the bank
				var Debtor = function Debtor(debtorName,debt){//function to make new debtors
					this.debtorName = debtorName;//this defines their names
					this.debt = debt;//this defines their debt
				}
				ShylockDebtor = new Debtor($valueArray[1],$valueArray[2]);//this puts the debtors into the debtor function 
				console.log(ShylockDebtor);//confirms they're an object in there
				debtKeeper.push(ShylockDebtor);//this pushes the debtor into the debtor prison array
				console.log(debtKeeper);//confirms
				return respond('*ShylockBot gives '+$valueArray[1]+' '+$valueArray[2]+' ducats*');//and responds through this
			} else if ($value==='ledger'){//if the word typed in is ledger
				respond('*ShylockBot pulls out his ledger');//pulls out his robe and wizard hat
				for(i=0;i<debtKeeper.length;i++){//for loop to cycle through all debtors
					respond(debtKeeper[i].debtorName+' owes me '+debtKeeper[i].debt+' ducats');//responds with the name and amount owed of each debtor
				}
			} else if ($value==='collect interest'){//if collect interest is typed in
				respond('*ShylockBot collects interest at '+interestRate+'%*');//this lets you know what the current interest rate is at
				for(i=0;i<debtKeeper.length;i++){//for loop to get through the debtors
					var newDebt = parseInt(debtKeeper[i].debt)+parseInt(debtKeeper[i].debt*interestRate);//this sets what the new debt is
					debtKeeper[i].debt = newDebt;//this sets the new debt as the current debt
					respond(debtKeeper[i].debtorName+' now owes me '+debtKeeper[i].debt+' ducats');//this responds with what everyone owes now
				}
			} else if ($valueArray[0]==='set'){//set interest rate function
				prevInterestRate=interestRate//this is used as a placeholder for the previous interest rate
				interestRateNum=$valueArray[3].replace('%','')//this gets rid of the goddamn % sign
				interestRate=parseInt(interestRateNum)*.01//this makes the new interest rate the correct format to charge them
//** for later use: whenever I tried to switch it up so that interest rate was a whole number on its' own
//and only changed into a decimal to calculate interest, it broke the code. Figure out why later **
				respond('*ShylockBot adjusts his interest rate from '+(prevInterestRate*100)+'% to '+(interestRate*100)+'%*')
			}

		}
	};
	var $input = $('inputBox');
	$(document).on('keypress',submit);
}); 




