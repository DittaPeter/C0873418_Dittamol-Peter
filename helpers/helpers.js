
function formatPercent(number){
             return Math.round(number*100) + "%"
         };


function formatNumber(number) {
             return number.toFixed(2);
         };
	
	
function formatCurrency(number) {
             return "$" + number.toFixed(2).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
         };


function formatPhoneNumber(phoneNumber) {
             phoneNumber = phoneNumber.toString();
                 return "(" + phoneNumber.substr(0,3) + ") " + phoneNumber.substr(3,3) + "-" + phoneNumber.substr(6,4);
         };
