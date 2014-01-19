#pragma strict
var player1total : int;
var player2total : int;

function Start () {
	player1total = gameObject.Find("recordMove").GetComponent(chosenCombo).player1total;
	player2total = gameObject.Find("recordMove").GetComponent(chosenCombo).player2total;
}

function Update () {

}

function OnMouseDown () {
	//check if someone won and start new game else continue
	player1total = gameObject.Find("recordMove").GetComponent(chosenCombo).player1total;
	player2total = gameObject.Find("recordMove").GetComponent(chosenCombo).player2total;
	
	if	(player1total >= 11 || player2total >= 11) {
		gameObject.Find("recordMove").GetComponent(chosenCombo).player1total = 0;
		gameObject.Find("recordMove").GetComponent(chosenCombo).player2total = 0;
		gameObject.Find("P1Score").GetComponent(TextMesh).text = "0"; 
		gameObject.Find("P2Score").GetComponent(TextMesh).text = "0"; 
	}
	
	//delete board
	for(var fooObj1 : GameObject in GameObject.FindGameObjectsWithTag("player1"))
	{
		Destroy(fooObj1);
		      
	}
	
	for(var fooObj2 : GameObject in GameObject.FindGameObjectsWithTag("player2"))
	{
		Destroy(fooObj2);
	}
	
	for(var fooObj3 : GameObject in GameObject.FindGameObjectsWithTag("feedback"))
	{
		Destroy(fooObj3);
	}
	//create board
	gameObject.Find("Main Camera").GetComponent(createPlayer1Board).CreateBoard();
	gameObject.Find("Main Camera").GetComponent(createPlayer2Board).CreateBoard();
	
	//reset vars
	gameObject.Find("recordMove").GetComponent(chosenCombo).player1amount = 0;
	gameObject.Find("recordMove").GetComponent(chosenCombo).player2amount = 0;
	
	//hide buttons
	
	renderer.enabled = false;
	collider.enabled = false;
	gameObject.Find("nextTxt").GetComponent(TextMesh).renderer.enabled = false;
	gameObject.Find("scoreStatus").GetComponent(TextMesh).text = "R -> G -> B -> R";
}