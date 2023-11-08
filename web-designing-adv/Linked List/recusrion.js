//Google Question
//Given an 
var array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
//It should return 2

//Given an 
array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
//It should return 1

//Given an 
var array3 = [2, 3, 4, 5];
//It should return undefined


function firstRecurringCharacter(arr) {

    var input = arr;
    var check = [];
    loop1:
        for (var i = 0; i < array2.length; i++) {
            if (i == 0) {
                check.push(input[i])

            } else {
                for (var j = 0; j < check.length; j++) {
                    if (check[j] == input[i]) {
                        console.log(check[j]);
                    }
                }
                check.push(input[i])

            }
        }


}


//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
firstRecurringCharacter(array)