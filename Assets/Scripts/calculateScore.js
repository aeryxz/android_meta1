#pragma strict
// R -> G - > B
// G -> B - > R
// B -> R -> G
var player1colour : Color;
var player2colour : Color;
var player1amount : int;
var player2amount : int;
var winScore : int;

function Start () {
	winScore = 11;
}

function Update () {

}

function OnMouseDown () {
	player1colour = gameObject.Find("recordMove").GetComponent(chosenCombo).player1colour;
	player2colour = gameObject.Find("recordMove").GetComponent(chosenCombo).player2colour;
	player1amount  = gameObject.Find("recordMove").GetComponent(chosenCombo).player1amount;
	player2amount = gameObject.Find("recordMove").GetComponent(chosenCombo).player2amount;
	
	var bonusAmount = 1.5;
	
	//same colour, highest number wins
	if (player1colour == player2colour) {
		CompareAmount();
	}
	
	//player1 bonuses
	if (player1colour == Color.red && player2colour == Color.green) {
		player1amount = player1amount*bonusAmount;
		print ("P1:"+player1amount+" P2:" +player2amount);
		CompareAmount();
	}

	if (player1colour == Color.green && player2colour == Color.blue) {
		player1amount = player1amount*bonusAmount;
		print ("P1:"+player1amount+" P2:" +player2amount);
		CompareAmount();
	}
	
	if (player1colour == Color.blue && player2colour == Color.red) {
		player1amount = player1amount*bonusAmount;
		print ("P1:"+player1amount+" P2:" +player2amount);
		CompareAmount();
	}
	
	//player2 bonuses
	if (player2colour == Color.red && player1colour == Color.green) {
		player2amount = player2amount*bonusAmount;
		print ("P1:"+player1amount+" P2:" +player2amount);
		CompareAmount();
	}

	if (player2colour == Color.green && player1colour == Color.blue) {
		player2amount = player2amount*bonusAmount;
		print ("P1:"+player1amount+" P2:" +player2amount);
		CompareAmount();
	}
	
	if (player2colour == Color.blue && player1colour == Color.red) {
		player2amount = player2amount*bonusAmount;
		print ("P1:"+player1amount+" P2:" +player2amount);
		CompareAmount();
	}
	
	//shownextbutton
	renderer.enabled = false;
	collider.enabled = false;
	gameObject.Find("resolveTxt").GetComponent(TextMesh).renderer.enabled = false;
	
	gameObject.Find("nextBtn").renderer.enabled = true;
	gameObject.Find("nextBtn").collider.enabled = true;
	gameObject.Find("nextTxt").GetComponent(TextMesh).renderer.enabled = true;
	
}

function CompareAmount() {
	var player1total = gameObject.Find("recordMove").GetComponent(chosenCombo).player1total;
	var player2total = gameObject.Find("recordMove").GetComponent(chosenCombo).player2total;
	
	if (player1amount == player2amount) {
		print("Draw");
		gameObject.Find("scoreStatus").GetComponent(TextMesh).text = "Player 1 and 2 had a draw";
	}
	else if (player1amount > player2amount) {
		print("P1 Wins");
		gameObject.Find("scoreStatus").GetComponent(TextMesh).text = "Player 1 got " + (player1amount-player2amount) + " points";
		gameObject.Find("recordMove").GetComponent(chosenCombo).player1total += (player1amount-player2amount);
		gameObject.Find("P1Score").GetComponent(TextMesh).text = gameObject.Find("recordMove").GetComponent(chosenCombo).player1total.ToString();
	}
	else {
		print("P2 wins");
		gameObject.Find("scoreStatus").GetComponent(TextMesh).text = "Player 2 got " + (player2amount-player1amount) + " points";
		gameObject.Find("recordMove").GetComponent(chosenCombo).player2total += (player2amount-player1amount);
		gameObject.Find("P2Score").GetComponent(TextMesh).text = gameObject.Find("recordMove").GetComponent(chosenCombo).player2total.ToString();
	}
	
	//update scores
	player1total = gameObject.Find("recordMove").GetComponent(chosenCombo).player1total;
	player2total = gameObject.Find("recordMove").GetComponent(chosenCombo).player2total;
	
	//SHOW WHAT WAS CHOSEN
	var feedbackPrefab = Resources.Load("feedbackPrefab");
	for(var fooObj1 : GameObject in GameObject.FindGameObjectsWithTag("player1"))
	{
		if(fooObj1.GetComponent(colourCubeClick).checked) {
			Instantiate(feedbackPrefab,fooObj1.transform.position,fooObj1.transform.rotation);	
		}
	}
	
	for(var fooObj2 : GameObject in GameObject.FindGameObjectsWithTag("player2"))
	{
		if(fooObj2.GetComponent(colourCubeClick).checked) {
			Instantiate(feedbackPrefab,fooObj2.transform.position,fooObj2.transform.rotation);	
		}
	}


	
	if (player1total >= winScore) {
		gameObject.Find("scoreStatus").GetComponent(TextMesh).text = "Player 1 got to 11 and won!";
	}
	
	if (player2total >=winScore) {
		gameObject.Find("scoreStatus").GetComponent(TextMesh).text = "Player 2 got to 11 and won!";
	}
}