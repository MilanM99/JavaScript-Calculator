let display = document.getElementById("display");
let buttonsWrapper = document.querySelector(".buttons-wrapper");
let inputButtons = document.querySelectorAll(".input-button");
let calculateButton = document.getElementById("calculate-button");
let clearButton = document.getElementById("clear-button");
let calculateButton_status = false;

function insertButtonContent()
{
	let get = this.innerText;

	if(isNaN(get) == false)
	{
		if(calculateButton_status == true)
		{
			display.innerText = "";
			display.innerText = get;
			calculateButton_status = false;
		}
		else if(display.innerText == "0")
		{
			display.innerText = "";
			display.innerText = get;
		}
		else
		{
			display.innerText += get;
		}
	}
	else
	{
		if(calculateButton_status == true)
		{
			if(display.innerText == "Error")
			{
				display.innerText = "0";
				display.innerText += get;
				calculateButton_status = false;
			}
			else
			{
				display.innerText += get;
				calculateButton_status = false;
			}
		}
		else if(isNaN(display.innerText.slice(-1)) == true && isNaN(get) == true)
		{
			display.innerText = display.innerText.slice(0,-1);
			display.innerText += get;
		}
		else
		{
			display.innerText += get;
		}
	}
}
for(let i=0;i<inputButtons.length;i++)
{
	inputButtons[i].onclick = insertButtonContent;
}

function calculate()
{
	try
	{
		let result = eval(display.innerText);
		display.innerText = result;
	}
	catch(err)
	{
		display.innerText = "Error";
	}
	calculateButton_status = true;
}
calculateButton.onclick = calculate;

function reset()
{
	display.innerText = "0";
}
clearButton.onclick = reset;