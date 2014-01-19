#pragma strict
var recordMove : GameObject;
var selectedColour : Color;
var checked = false;

function Start () {
	recordMove = gameObject.Find("recordMove");
}

function Update () {

}

function OnMouseDown () {
	//check what player has chosen (colour)
	//check around what player has chosen (# of colours)
	selectedColour = GetComponent(colourCubeColour).pickedColour;
	
	if (gameObject.tag == "player1" && recordMove.GetComponent(chosenCombo).player1amount ==0) {
		recordMove.GetComponent(chosenCombo).player1colour = selectedColour;
		checked = true;
		//calculation bullshit 
		CheckTop();
		CheckBot();
		CheckLeft();
		CheckRight();
		CheckItem();
	}
	
	if (gameObject.tag == "player2" && recordMove.GetComponent(chosenCombo).player2amount ==0) {
		recordMove.GetComponent(chosenCombo).player2colour = selectedColour;
		checked = true;
		//calculation bullshit 
		CheckTop();
		CheckBot();
		CheckLeft();
		CheckRight();
		CheckItem();
	}
	
	UpdateButtonState();
}

function UpdateButtonState() {
	if (recordMove.GetComponent(chosenCombo).player1amount > 0 && recordMove.GetComponent(chosenCombo).player2amount > 0) {
		
		for(var fooObj1 : GameObject in GameObject.FindGameObjectsWithTag("player1"))
		{
			fooObj1.collider.enabled = false;	      
		}
		
		for(var fooObj2 : GameObject in GameObject.FindGameObjectsWithTag("player2"))
		{
			fooObj2.collider.enabled = false;	      
		}
		
		gameObject.Find("resolveBtn").renderer.enabled = true;
		gameObject.Find("resolveBtn").collider.enabled = true;
		gameObject.Find("resolveTxt").GetComponent(TextMesh).renderer.enabled = true;
	}
}
	
function CheckTop(){

	var posY = transform.position.y;
	
	var objectToFind = gameObject.Find("colourCube_"+transform.position.x+"_"+(posY+1).ToString());
	if(objectToFind){
		if(!objectToFind.GetComponent(colourCubeClick).checked && objectToFind.renderer.material.color == selectedColour){
		objectToFind.GetComponent(colourCubeClick).selectedColour = selectedColour;
		objectToFind.GetComponent(colourCubeClick).CheckTop();
		objectToFind.GetComponent(colourCubeClick).CheckLeft();
		objectToFind.GetComponent(colourCubeClick).CheckRight();
		objectToFind.GetComponent(colourCubeClick).CheckItem();
		}
	}


}

function CheckBot(){

	var posY = transform.position.y;
	
	var objectToFind = gameObject.Find("colourCube_"+transform.position.x+"_"+(posY-1).ToString());
	if(objectToFind){
		if(!objectToFind.GetComponent(colourCubeClick).checked && objectToFind.renderer.material.color == selectedColour){
		objectToFind.GetComponent(colourCubeClick).selectedColour = selectedColour;
		objectToFind.GetComponent(colourCubeClick).CheckBot();
		objectToFind.GetComponent(colourCubeClick).CheckLeft();
		objectToFind.GetComponent(colourCubeClick).CheckRight();
		objectToFind.GetComponent(colourCubeClick).CheckItem();
		}
	}


}

function CheckLeft(){

	var posX = transform.position.x;
	
	var objectToFind = gameObject.Find("colourCube_"+(posX-1).ToString()+"_"+transform.position.y);
	if(objectToFind){
		if(!objectToFind.GetComponent(colourCubeClick).checked && objectToFind.renderer.material.color == selectedColour){
		objectToFind.GetComponent(colourCubeClick).selectedColour = selectedColour;
		objectToFind.GetComponent(colourCubeClick).CheckTop();
		objectToFind.GetComponent(colourCubeClick).CheckBot();
		objectToFind.GetComponent(colourCubeClick).CheckLeft();
		objectToFind.GetComponent(colourCubeClick).CheckItem();
		}
	}

}

function CheckRight(){

	var posX = transform.position.x;
	
	var objectToFind = gameObject.Find("colourCube_"+(posX+1).ToString()+"_"+transform.position.y);
	if(objectToFind){
		if(!objectToFind.GetComponent(colourCubeClick).checked && objectToFind.renderer.material.color == selectedColour){
		objectToFind.GetComponent(colourCubeClick).selectedColour = selectedColour;
		objectToFind.GetComponent(colourCubeClick).CheckTop();
		objectToFind.GetComponent(colourCubeClick).CheckBot();
		objectToFind.GetComponent(colourCubeClick).CheckRight();
		objectToFind.GetComponent(colourCubeClick).CheckItem();
		}
	}

}

function CheckItem(){

checked = true;

}