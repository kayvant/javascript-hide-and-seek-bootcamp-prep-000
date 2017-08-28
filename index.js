function getFirstSelector(selector)
{


    return document.querySelector(selector);

}

function nestedTarget()
{

 return document.querySelector('#nested .target');

}

function increaseRankBy(n)
{

  const rList = document.querySelectorAll('.ranked-list');
  const firstRankedList = rList[0];
  const secondRankedList = rList[1];

  let rankedChildren = firstRankedList.children;

  for (let i = 0; i < rankedChildren.length; i++)
  {

       rankedChildren[i].innerHTML = parseInt(rankedChildren[i].innerHTML) + n;

  }

   rankedChildren = secondRankedList.children;


  for (let i = 0; i < rankedChildren.length; i++)
  {
      rankedChildren[i].innerHTML = parseInt(rankedChildren[i].innerHTML) + n;
  }

}


function deepestChild()
{

   const is = document.querySelectorAll('#grand-node div');
   const boo = document.querySelector('#grand-node div div div div');

   for (let i = 0; i < is.length; i++)
   {
     if (is[i].innerHTML === boo.innerHTML)
     {
       return is[i];
     }
   }

  return null;
}
