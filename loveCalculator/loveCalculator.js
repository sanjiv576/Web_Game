let showMsg = false;
        function calculate() {
            let love = Math.random() * 100;
            love = Math.floor(love) + 1;

            showMsg = true;

            let name1 = document.getElementById('name1').value;
            let name2 = document.getElementById('name2').value;
            // document.getElementsByName("show").innerText=name1    

            let msg = "Love between " + name1 + " and " + name2 + " is " + love + "%";
            let paraMsg;

            if (showMsg && name1 != "" && name2 != "") {


                if (love <= 50) {
                    paraMsg = "You are not made for each other."
                }

                else {
                    paraMsg = "You are truly made for each other."
                }
            }
            else {
                msg = "Something went wrong"
                paraMsg="Something went wrong";
            }

            document.getElementById('showResult').innerText = msg;
            document.getElementById("show").innerText = paraMsg;
        }