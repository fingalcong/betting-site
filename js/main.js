$(document).ready(function() {
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1){  
			$('.page-title').addClass("sticky");
		}
		else{
			$('.page-title').removeClass("sticky");
		}
	});

});

let true_or_false = 0;
let type_choice = '';

function submitStat(){
    if(true_or_false == 1){
        //const home_team = document.getElementById("team_name").value;
        const amount = document.getElementById("Amount_for_betting").value;
        const security_code = document.getElementById("Security_for_betting").value;

        alert(amount + security_code + type_choice);
        //true_or_false = 0;
    }
    /*const amount = document.getElementById("Amount_for_betting").value;
    const security_code = document.getElementById("Security_for_betting").value;
    */
    //alert(amount + security_code);
    if(true_or_false == 0){
        alert('You have not chosen which type to bet on');
    }
}

function submitStat_Villa(){
    if(true_or_false == 1){
        //const home_team = document.getElementById("team_name").value;
        const home_team = document.getElementById("Villa").innerText;
        const away_team = document.getElementById("Brighton").innerText;
        const amount = document.getElementById("Amount_for_betting_Villa").value;
        const security_code = document.getElementById("Security_for_betting_Villa").value;

        alert(home_team + away_team + amount + security_code + type_choice);
        //true_or_false = 0;
    }
    /*const amount = document.getElementById("Amount_for_betting").value;
    const security_code = document.getElementById("Security_for_betting").value;
    */
    //alert(amount + security_code);
    if(true_or_false == 0){
        alert('You have not chosen which type to bet on');
    }
}

function submitbig_Villa(){
    if(true_or_false == 1){
        //const home_team = document.getElementById("team_name").value;
        const home_team = document.getElementById("Villa").innerText;
        const away_team = document.getElementById("Brighton").innerText;
        const amount = document.getElementById("Amount_for_big_Villa").value;
        const security_code = document.getElementById("Security_for_big_Villa").value;

        alert(home_team + away_team + amount + security_code + type_choice);
        //true_or_false = 0;
    }
    /*const amount = document.getElementById("Amount_for_betting").value;
    const security_code = document.getElementById("Security_for_betting").value;
    */
    //alert(amount + security_code);
    if(true_or_false == 0){
        alert('You have not chosen which type to bet on');
    }
}

function submitCorner_Villa(){
    if(true_or_false == 1){
        //const home_team = document.getElementById("team_name").value;
        const home_team = document.getElementById("Villa").innerText;
        const away_team = document.getElementById("Brighton").innerText;
        const amount = document.getElementById("Amount_for_Corner_Villa").value;
        const security_code = document.getElementById("Security_for_Corner_Villa").value;

        alert(home_team + away_team + amount + security_code + type_choice);
        //true_or_false = 0;
    }
    /*const amount = document.getElementById("Amount_for_betting").value;
    const security_code = document.getElementById("Security_for_betting").value;
    */
    //alert(amount + security_code);
    if(true_or_false == 0){
        alert('You have not chosen which type to bet on');
    }
}

function submitCard_Villa(){
    if(true_or_false == 1){
        //const home_team = document.getElementById("team_name").value;
        const home_team = document.getElementById("Villa").innerText;
        const away_team = document.getElementById("Brighton").innerText;
        const amount = document.getElementById("Amount_for_Card_Villa").value;
        const security_code = document.getElementById("Security_for_Card_Villa").value;

        alert(home_team + away_team + amount + security_code + type_choice);
        //true_or_false = 0;
    }
    /*const amount = document.getElementById("Amount_for_betting").value;
    const security_code = document.getElementById("Security_for_betting").value;
    */
    //alert(amount + security_code);
    if(true_or_false == 0){
        alert('You have not chosen which type to bet on');
    }
}

function submitStat_Everton(){
    if(true_or_false == 1){
        //const home_team = document.getElementById("team_name").value;
        const home_team = document.getElementById("Everton").innerText;
        const away_team = document.getElementById("Bournemouth").innerText;
        const amount = document.getElementById("Amount_for_betting_Everton").value;
        const security_code = document.getElementById("Security_for_betting_Everton").value;

        alert(home_team + away_team + amount + security_code + type_choice);
        //true_or_false = 0;
    }
    /*const amount = document.getElementById("Amount_for_betting").value;
    const security_code = document.getElementById("Security_for_betting").value;
    */
    //alert(amount + security_code);
    if(true_or_false == 0){
        alert('You have not chosen which type to bet on');
    }
}

function submitbig_Everton(){
    if(true_or_false == 1){
        //const home_team = document.getElementById("team_name").value;
        const home_team = document.getElementById("Everton").innerText;
        const away_team = document.getElementById("Bournemouth").innerText;
        const amount = document.getElementById("Amount_for_big_Everton").value;
        const security_code = document.getElementById("Security_for_big_Everton").value;

        alert(home_team + away_team + amount + security_code + type_choice);
        //true_or_false = 0;
    }
    /*const amount = document.getElementById("Amount_for_betting").value;
    const security_code = document.getElementById("Security_for_betting").value;
    */
    //alert(amount + security_code);
    if(true_or_false == 0){
        alert('You have not chosen which type to bet on');
    }
}

function submitCorner_Everton(){
    if(true_or_false == 1){
        //const home_team = document.getElementById("team_name").value;
        const home_team = document.getElementById("Everton").innerText;
        const away_team = document.getElementById("Bournemouth").innerText;
        const amount = document.getElementById("Amount_for_Corner_Everton").value;
        const security_code = document.getElementById("Security_for_Corner_Everton").value;

        alert(home_team + away_team + amount + security_code + type_choice);
        //true_or_false = 0;
    }
    /*const amount = document.getElementById("Amount_for_betting").value;
    const security_code = document.getElementById("Security_for_betting").value;
    */
    //alert(amount + security_code);
    if(true_or_false == 0){
        alert('You have not chosen which type to bet on');
    }
}

function submitCard_Everton(){
    if(true_or_false == 1){
        //const home_team = document.getElementById("team_name").value;
        const home_team = document.getElementById("Everton").innerText;
        const away_team = document.getElementById("Bournemouth").innerText;
        const amount = document.getElementById("Amount_for_Card_Everton").value;
        const security_code = document.getElementById("Security_for_Card_Everton").value;

        alert(home_team + away_team + amount + security_code + type_choice);
        //true_or_false = 0;
    }
    /*const amount = document.getElementById("Amount_for_betting").value;
    const security_code = document.getElementById("Security_for_betting").value;
    */
    //alert(amount + security_code);
    if(true_or_false == 0){
        alert('You have not chosen which type to bet on');
    }
}

function submitStat_Leeds(){
    if(true_or_false == 1){
        //const home_team = document.getElementById("team_name").value;
        const home_team = document.getElementById("Leeds").innerText;
        const away_team = document.getElementById("Tottenham").innerText;
        const amount = document.getElementById("Amount_for_betting_Leeds").value;
        const security_code = document.getElementById("Security_for_betting_Leeds").value;

        alert(home_team + away_team + amount + security_code + type_choice);
        //true_or_false = 0;
    }
    /*const amount = document.getElementById("Amount_for_betting").value;
    const security_code = document.getElementById("Security_for_betting").value;
    */
    //alert(amount + security_code);
    if(true_or_false == 0){
        alert('You have not chosen which type to bet on');
    }
}

function submitbig_Leeds(){
    if(true_or_false == 1){
        //const home_team = document.getElementById("team_name").value;
        const home_team = document.getElementById("Leeds").innerText;
        const away_team = document.getElementById("Tottenham").innerText;
        const amount = document.getElementById("Amount_for_big_Leeds").value;
        const security_code = document.getElementById("Security_for_big_Leeds").value;

        alert(home_team + away_team + amount + security_code + type_choice);
        //true_or_false = 0;
    }
    /*const amount = document.getElementById("Amount_for_betting").value;
    const security_code = document.getElementById("Security_for_betting").value;
    */
    //alert(amount + security_code);
    if(true_or_false == 0){
        alert('You have not chosen which type to bet on');
    }
}

function submitCorner_Leeds(){
    if(true_or_false == 1){
        //const home_team = document.getElementById("team_name").value;
        const home_team = document.getElementById("Leeds").innerText;
        const away_team = document.getElementById("Tottenham").innerText;
        const amount = document.getElementById("Amount_for_Corner_Leeds").value;
        const security_code = document.getElementById("Security_for_Corner_Leeds").value;

        alert(home_team + away_team + amount + security_code + type_choice);
        //true_or_false = 0;
    }
    /*const amount = document.getElementById("Amount_for_betting").value;
    const security_code = document.getElementById("Security_for_betting").value;
    */
    //alert(amount + security_code);
    if(true_or_false == 0){
        alert('You have not chosen which type to bet on');
    }
}

function submitCard_Leeds(){
    if(true_or_false == 1){
        //const home_team = document.getElementById("team_name").value;
        const home_team = document.getElementById("Leeds").innerText;
        const away_team = document.getElementById("Tottenham").innerText;
        const amount = document.getElementById("Amount_for_Card_Leeds").value;
        const security_code = document.getElementById("Security_for_Card_Leeds").value;

        alert(home_team + away_team + amount + security_code + type_choice);
        //true_or_false = 0;
    }
    /*const amount = document.getElementById("Amount_for_betting").value;
    const security_code = document.getElementById("Security_for_betting").value;
    */
    //alert(amount + security_code);
    if(true_or_false == 0){
        alert('You have not chosen which type to bet on');
    }
}

function submitStat_United(){
    if(true_or_false == 1){
        //const home_team = document.getElementById("team_name").value;
        const home_team = document.getElementById("Man_United").innerText;
        const away_team = document.getElementById("Fulham").innerText;
        const amount = document.getElementById("Amount_for_betting_United").value;
        const security_code = document.getElementById("Security_for_betting_United").value;

        alert(home_team + away_team + amount + security_code + type_choice);
        //true_or_false = 0;
    }
    /*const amount = document.getElementById("Amount_for_betting").value;
    const security_code = document.getElementById("Security_for_betting").value;
    */
    //alert(amount + security_code);
    if(true_or_false == 0){
        alert('You have not chosen which type to bet on');
    }
}

function submitbig_United(){
    if(true_or_false == 1){
        //const home_team = document.getElementById("team_name").value;
        const home_team = document.getElementById("Man_United").innerText;
        const away_team = document.getElementById("Fulham").innerText;
        const amount = document.getElementById("Amount_for_big_United").value;
        const security_code = document.getElementById("Security_for_big_United").value;

        alert(home_team + away_team + amount + security_code + type_choice);
        //true_or_false = 0;
    }
    /*const amount = document.getElementById("Amount_for_betting").value;
    const security_code = document.getElementById("Security_for_betting").value;
    */
    //alert(amount + security_code);
    if(true_or_false == 0){
        alert('You have not chosen which type to bet on');
    }
}

function submitCorner_United(){
    if(true_or_false == 1){
        //const home_team = document.getElementById("team_name").value;
        const home_team = document.getElementById("Man_United").innerText;
        const away_team = document.getElementById("Fulham").innerText;
        const amount = document.getElementById("Amount_for_Corner_United").value;
        const security_code = document.getElementById("Security_for_Corner_United").value;

        alert(home_team + away_team + amount + security_code + type_choice);
        //true_or_false = 0;
    }
    /*const amount = document.getElementById("Amount_for_betting").value;
    const security_code = document.getElementById("Security_for_betting").value;
    */
    //alert(amount + security_code);
    if(true_or_false == 0){
        alert('You have not chosen which type to bet on');
    }
}

function submitCard_United(){
    if(true_or_false == 1){
        //const home_team = document.getElementById("team_name").value;
        const home_team = document.getElementById("Man_United").innerText;
        const away_team = document.getElementById("Fulham").innerText;
        const amount = document.getElementById("Amount_for_Card_United").value;
        const security_code = document.getElementById("Security_for_Card_United").value;

        alert(home_team + away_team + amount + security_code + type_choice);
        //true_or_false = 0;
    }
    /*const amount = document.getElementById("Amount_for_betting").value;
    const security_code = document.getElementById("Security_for_betting").value;
    */
    //alert(amount + security_code);
    if(true_or_false == 0){
        alert('You have not chosen which type to bet on');
    }
}

function submitStat_Chelsea(){
    if(true_or_false == 1){
        //const home_team = document.getElementById("team_name").value;
        const home_team = document.getElementById("Chelsea").innerText;
        const away_team = document.getElementById("away_newcastle").innerText;
        const amount = document.getElementById("Amount_for_betting_Chelsea").value;
        const security_code = document.getElementById("Security_for_betting_Chelsea").value;

        alert(home_team + away_team + amount + security_code + type_choice);
        //true_or_false = 0;
    }
    /*const amount = document.getElementById("Amount_for_betting").value;
    const security_code = document.getElementById("Security_for_betting").value;
    */
    //alert(amount + security_code);
    if(true_or_false == 0){
        alert('You have not chosen which type to bet on');
    }
}

function submitbig_Chelsea(){
    if(true_or_false == 1){
        //const home_team = document.getElementById("team_name").value;
        const home_team = document.getElementById("Chelsea").innerText;
        const away_team = document.getElementById("away_newcastle").innerText;
        const amount = document.getElementById("Amount_for_big_Chelsea").value;
        const security_code = document.getElementById("Security_for_big_Chelsea").value;

        alert(home_team + away_team + amount + security_code + type_choice);
        //true_or_false = 0;
    }
    /*const amount = document.getElementById("Amount_for_betting").value;
    const security_code = document.getElementById("Security_for_betting").value;
    */
    //alert(amount + security_code);
    if(true_or_false == 0){
        alert('You have not chosen which type to bet on');
    }
}

function submitCorner_Chelsea(){
    if(true_or_false == 1){
        //const home_team = document.getElementById("team_name").value;
        const home_team = document.getElementById("Chelsea").innerText;
        const away_team = document.getElementById("away_newcastle").innerText;
        const amount = document.getElementById("Amount_for_Corner_Chelsea").value;
        const security_code = document.getElementById("Security_for_Corner_Chelsea").value;

        alert(home_team + away_team + amount + security_code + type_choice);
        //true_or_false = 0;
    }
    /*const amount = document.getElementById("Amount_for_betting").value;
    const security_code = document.getElementById("Security_for_betting").value;
    */
    //alert(amount + security_code);
    if(true_or_false == 0){
        alert('You have not chosen which type to bet on');
    }
}

function submitCard_Chelsea(){
    if(true_or_false == 1){
        //const home_team = document.getElementById("team_name").value;
        const home_team = document.getElementById("Chelsea").innerText;
        const away_team = document.getElementById("away_newcastle").innerText;
        const amount = document.getElementById("Amount_for_Card_Chelsea").value;
        const security_code = document.getElementById("Security_for_Card_Chelsea").value;

        alert(home_team + away_team + amount + security_code + type_choice);
        //true_or_false = 0;
    }
    /*const amount = document.getElementById("Amount_for_betting").value;
    const security_code = document.getElementById("Security_for_betting").value;
    */
    //alert(amount + security_code);
    if(true_or_false == 0){
        alert('You have not chosen which type to bet on');
    }
}

function submitStat_Leicester(){
    if(true_or_false == 1){
        //const home_team = document.getElementById("team_name").value;
        const home_team = document.getElementById("Leicester").innerText;
        const away_team = document.getElementById("away_west").innerText;
        const amount = document.getElementById("Amount_for_betting_Leicester").value;
        const security_code = document.getElementById("Security_for_betting_Leicester").value;

        alert(home_team + away_team + amount + security_code + type_choice);
        //true_or_false = 0;
    }
    /*const amount = document.getElementById("Amount_for_betting").value;
    const security_code = document.getElementById("Security_for_betting").value;
    */
    //alert(amount + security_code);
    if(true_or_false == 0){
        alert('You have not chosen which type to bet on');
    }
}

function submitbig_Leicester(){
    if(true_or_false == 1){
        //const home_team = document.getElementById("team_name").value;
        const home_team = document.getElementById("Leicester").innerText;
        const away_team = document.getElementById("away_west").innerText;
        const amount = document.getElementById("Amount_for_big_Leicester").value;
        const security_code = document.getElementById("Security_for_big_Leicester").value;

        alert(home_team + away_team + amount + security_code + type_choice);
        //true_or_false = 0;
    }
    /*const amount = document.getElementById("Amount_for_betting").value;
    const security_code = document.getElementById("Security_for_betting").value;
    */
    //alert(amount + security_code);
    if(true_or_false == 0){
        alert('You have not chosen which type to bet on');
    }
}

function submitCorner_Leicester(){
    if(true_or_false == 1){
        //const home_team = document.getElementById("team_name").value;
        const home_team = document.getElementById("Leicester").innerText;
        const away_team = document.getElementById("away_west").innerText;
        const amount = document.getElementById("Amount_for_Corner_Leicester").value;
        const security_code = document.getElementById("Security_for_Corner_Leicester").value;

        alert(home_team + away_team + amount + security_code + type_choice);
        //true_or_false = 0;
    }
    /*const amount = document.getElementById("Amount_for_betting").value;
    const security_code = document.getElementById("Security_for_betting").value;
    */
    //alert(amount + security_code);
    if(true_or_false == 0){
        alert('You have not chosen which type to bet on');
    }
}

function submitCard_Leicester(){
    if(true_or_false == 1){
        //const home_team = document.getElementById("team_name").value;
        const home_team = document.getElementById("Leicester").innerText;
        const away_team = document.getElementById("away_west").innerText;
        const amount = document.getElementById("Amount_for_Card_Leicester").value;
        const security_code = document.getElementById("Security_for_Card_Leicester").value;

        alert(home_team + away_team + amount + security_code + type_choice);
        //true_or_false = 0;
    }
    /*const amount = document.getElementById("Amount_for_betting").value;
    const security_code = document.getElementById("Security_for_betting").value;
    */
    //alert(amount + security_code);
    if(true_or_false == 0){
        alert('You have not chosen which type to bet on');
    }
}

function submitStat_Arsenal(){
    if(true_or_false == 1){
        //const home_team = document.getElementById("team_name").value;
        const home_team = document.getElementById("home_Arsenal").innerText;
        const away_team = document.getElementById("away_wovles").innerText;
        const amount = document.getElementById("Amount_for_betting_Arsenal").value;
        const security_code = document.getElementById("Security_for_betting_Arsenal").value;

        alert(home_team + away_team + amount + security_code + type_choice);
        //true_or_false = 0;
    }
    /*const amount = document.getElementById("Amount_for_betting").value;
    const security_code = document.getElementById("Security_for_betting").value;
    */
    //alert(amount + security_code);
    if(true_or_false == 0){
        alert('You have not chosen which type to bet on');
    }
}

function submitbig_Arsenal(){
    if(true_or_false == 1){
        //const home_team = document.getElementById("team_name").value;
        const home_team = document.getElementById("home_Arsenal").innerText;
        const away_team = document.getElementById("away_wovles").innerText;
        const amount = document.getElementById("Amount_for_big_Arsenal").value;
        const security_code = document.getElementById("Security_for_big_Arsenal").value;

        alert(home_team + away_team + amount + security_code + type_choice);
        //true_or_false = 0;
    }
    /*const amount = document.getElementById("Amount_for_betting").value;
    const security_code = document.getElementById("Security_for_betting").value;
    */
    //alert(amount + security_code);
    if(true_or_false == 0){
        alert('You have not chosen which type to bet on');
    }
}

function submitCorner_Arsenal(){
    if(true_or_false == 1){
        //const home_team = document.getElementById("team_name").value;
        const home_team = document.getElementById("home_Arsenal").innerText;
        const away_team = document.getElementById("away_wovles").innerText;
        const amount = document.getElementById("Amount_for_Corner_Arsenal").value;
        const security_code = document.getElementById("Security_for_Corner_Arsenal").value;

        alert(home_team + away_team + amount + security_code + type_choice);
        //true_or_false = 0;
    }
    /*const amount = document.getElementById("Amount_for_betting").value;
    const security_code = document.getElementById("Security_for_betting").value;
    */
    //alert(amount + security_code);
    if(true_or_false == 0){
        alert('You have not chosen which type to bet on');
    }
}

function submitCard_Arsenal(){
    if(true_or_false == 1){
        //const home_team = document.getElementById("team_name").value;
        const home_team = document.getElementById("home_Arsenal").innerText;
        const away_team = document.getElementById("away_wovles").innerText;
        const amount = document.getElementById("Amount_for_Card_Arsenal").value;
        const security_code = document.getElementById("Security_for_Card_Arsenal").value;

        alert(home_team + away_team + amount + security_code + type_choice);
        //true_or_false = 0;
    }
    /*const amount = document.getElementById("Amount_for_betting").value;
    const security_code = document.getElementById("Security_for_betting").value;
    */
    //alert(amount + security_code);
    if(true_or_false == 0){
        alert('You have not chosen which type to bet on');
    }
}


function submitStat_Southampton(){
    if(true_or_false == 1){
        //const home_team = document.getElementById("team_name").value;
        const home_team = document.getElementById("Southampton").innerText;
        const away_team = document.getElementById("away_liverpool").innerText;
        const amount = document.getElementById("Amount_for_betting_Southampton").value;
        const security_code = document.getElementById("Security_for_betting_Southampton").value;

        alert(home_team + away_team + amount + security_code + type_choice);
        //true_or_false = 0;
    }
    /*const amount = document.getElementById("Amount_for_betting").value;
    const security_code = document.getElementById("Security_for_betting").value;
    */
    //alert(amount + security_code);
    if(true_or_false == 0){
        alert('You have not chosen which type to bet on');
    }
}

function submitbig_Southampton(){
    if(true_or_false == 1){
        //const home_team = document.getElementById("team_name").value;
        const home_team = document.getElementById("Southampton").innerText;
        const away_team = document.getElementById("away_liverpool").innerText;
        const amount = document.getElementById("Amount_for_big_Southampton").value;
        const security_code = document.getElementById("Security_for_big_Southampton").value;

        alert(home_team + away_team + amount + security_code + type_choice);
        //true_or_false = 0;
    }
    /*const amount = document.getElementById("Amount_for_betting").value;
    const security_code = document.getElementById("Security_for_betting").value;
    */
    //alert(amount + security_code);
    if(true_or_false == 0){
        alert('You have not chosen which type to bet on');
    }
}

function submitCorner_Southampton(){
    if(true_or_false == 1){
        //const home_team = document.getElementById("team_name").value;
        const home_team = document.getElementById("Southampton").innerText;
        const away_team = document.getElementById("away_liverpool").innerText;
        const amount = document.getElementById("Amount_for_Corner_Southampton").value;
        const security_code = document.getElementById("Security_for_Corner_Southampton").value;

        alert(home_team + away_team + amount + security_code + type_choice);
        //true_or_false = 0;
    }
    /*const amount = document.getElementById("Amount_for_betting").value;
    const security_code = document.getElementById("Security_for_betting").value;
    */
    //alert(amount + security_code);
    if(true_or_false == 0){
        alert('You have not chosen which type to bet on');
    }
}

function submitCard_Southampton(){
    if(true_or_false == 1){
        //const home_team = document.getElementById("team_name").value;
        const home_team = document.getElementById("Southampton").innerText;
        const away_team = document.getElementById("away_liverpool").innerText;
        const amount = document.getElementById("Amount_for_Card_Southampton").value;
        const security_code = document.getElementById("Security_for_Card_Southampton").value;

        alert(home_team + away_team + amount + security_code + type_choice);
        //true_or_false = 0;
    }
    /*const amount = document.getElementById("Amount_for_betting").value;
    const security_code = document.getElementById("Security_for_betting").value;
    */
    //alert(amount + security_code);
    if(true_or_false == 0){
        alert('You have not chosen which type to bet on');
    }
}

function chooseWin(){
    type_choice = 'win';
    true_or_false = 1;
}

function chooseDraw(){
    type_choice = 'draw';
    true_or_false = 1;
}

function chooseLoss(){
    type_choice = 'loss';
    true_or_false = 1;
}

function chooseBig(){
    type_choice = 'big';
    true_or_false = 1;
}

function chooseSmall(){
    type_choice = 'small';
    true_or_false = 1;
}

function chooseHome(){
    type_choice = 'home';
    true_or_false = 1;
}

function chooseSame(){
    type_choice = 'same';
    true_or_false = 1;
}

function chooseAway(){
    type_choice = 'away';
    true_or_false = 1;
}



function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});

function login(){
    const login_username = document.getElementById("login_username").value;
    const login_pwd = document.getElementById("login_pwd").value;

    alert(login_username + login_pwd);
    var xhr = new XMLHttpRequest();
    var url = "http://yourserver.com/yourServlet";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    var data = {
        username: login_username,
        pwd: login_pwd
    };

    xhr.send(JSON.stringify(data));
}

function signup(){
    const username = document.getElementById("signup_username").value;
    const email = document.getElementById("signup_email").value;
    const pwd = document.getElementById("signup_pwd").value;
    const check_pwd = document.getElementById("rpt_pwd").value;

    alert(username + email + pwd);
    
    if(check_pwd != pwd){
        alert("Please make sure that you type in the same password")
    }

    var xhr = new XMLHttpRequest();
    var url = "http://yourserver.com/yourServlet";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    var data = {
        username: username,
        email: email,
        pwd: pwd
    };

    xhr.send(JSON.stringify(data));

    /*if(pwd != check_pwd){
        alert('Please make sure that you type in the same password');
    }
    if(pwd == check_pwd){
        alert(username + email + pwd);
    }*/
}