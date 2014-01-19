#pragma strict
var player1colour : Color;
var player2colour : Color;
var player1amount : int;
var player2amount : int;
var player1total : int;
var player2total : int;


function Start () {

}

function Update () {

player1amount = 0;

	for(var fooObj : GameObject in GameObject.FindGameObjectsWithTag("player1"))
	{
		if(fooObj.GetComponent(colourCubeClick).checked)
		player1amount ++;
		      
	}

player2amount = 0;

	for(var fooObj2 : GameObject in GameObject.FindGameObjectsWithTag("player2"))
	{
		if(fooObj2.GetComponent(colourCubeClick).checked)
		player2amount ++;
		      
	}
	
}