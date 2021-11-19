function confess(){
	const divEl = document.getElementById("options");
  document.getElementById("result").innerHTML = "";
  divEl.innerHTML = '<p>You have chosen to <b>confess</b>.</p><p>If your partner <b>refuses</b> to confess, you will be free. If your partner <b>confesses</b>, you will serve 2 years.</p><button type="button" onclick="Javascript:result(1)">Get Result</button>';
}
function refuse(){
	const divEl = document.getElementById("options");
  document.getElementById("result").innerHTML = "";
  divEl.innerHTML = '<p>You have chosen to <b>refuse</b> to confess.</p><p>If your partner <b>refuses</b> to confess, you will serve 1 year. If your partner <b>confesses</b>, you will serve 3 years.</p><button type="button" onclick="Javascript:result(0)">Get Result</button>';
}
function result(choice){
	const partner = Math.floor(Math.random()*2);
  const divEl = document.getElementById("result");
  if (choice === 1 && partner === 1){
  	divEl.innerHTML = '<p>Your partner confessed! You both go to prison for two years.</p><img src="prison2.jpg" height="500">';
  }
  else if (choice === 0 && partner === 1){
  	divEl.innerHTML = '<p>Your partner confessed! You go to prison for three years and your partner goes free.</p><img src="prison1.jpg" height="500">';
  }
  else if (choice === 0 && partner === 0){
  	divEl.innerHTML = '<p>Your partner refused! You both go to prison for one year.</p><img src="prison2.jpg" height="500">';
  }
  else{
  	divEl.innerHTML = '<p>Your partner refused! You go free! Your partner goes to prison for three years.</p><img src="freedom.jpg" height="500">';
  }
}
