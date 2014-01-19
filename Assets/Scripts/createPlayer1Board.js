#pragma strict

function Start () {
	CreateBoard();
}

function Update () {

}

function CreateBoard() {
	var prefab = Resources.Load("colourCube");
	for (var i : int = -1;i < 3; i++) {
		var cube1 : GameObject = Instantiate (prefab, Vector3(i, 0, 0), Quaternion.identity);
		cube1.tag = "player1";
		var cube2 : GameObject  = Instantiate (prefab, Vector3(i, 1, 0), Quaternion.identity);
		cube2.tag = "player1";
		var cube3 : GameObject  = Instantiate (prefab, Vector3(i, 2, 0), Quaternion.identity);
		cube3.tag = "player1";
		var cube4 : GameObject  = Instantiate (prefab, Vector3(i, 3, 0), Quaternion.identity);
		cube4.tag = "player1";
	}
	
}