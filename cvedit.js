function documentEvent(e) 
{
	var ele = e.target;
	var c = ele.getAttribute("class");
	
	if (c === null)
		return true;
	
	if (['qualtype', 'qualcontent', 'qualestablishment', 'jobtitle', 'jobdescription', 'jobachievementlist', 'jobachievementitem'].indexOf(c) >= 0)
	{
		while (ele.hasChildNodes()) 
		{
			ele.removeChild(ele.lastChild);
		}
		ele.parentNode.removeChild(ele);
	}
	
	return true;
}

document.captureEvents(Event.CLICK);
document.onclick=documentEvent;

window.onload = addPrintButton();

function addPrintButton()
{
	var c = document.getElementById('container');
	
	var b = document.createElement('button');
	b.setAttribute('id','printbutton');
	b.appendChild(document.createTextNode('print'));
	b.onclick = function(){window.print();};
	b.style.position = 'fixed';
	b.style.right = '5px';
	b.style.top = '50%';
	
	c.parentNode.appendChild(b);		
}
