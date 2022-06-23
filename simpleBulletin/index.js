let articleItems = [];
let listItems = window.localStorage.getItem('articleItems');
const getArticleItems = document.querySelector('.article-items');

function renderArticleItems(items) {
   if (window.localStorage.getItem('articleItems') !== null) {
      let output = '';
      items.map(item => {
         output += `
      <div>
         <span>${item.article}</span>
         <span>${item.content}</span>
         <span>${item.date}</span>

         <div>
            <button>Edit</button>
            <button>Delete</button>
         </div>
      </div>
      `
      })

      getArticleItems.innerHTML = output;
   }
   else return;
}

window.addEventListener('load', renderArticleItems(listItems))

const createArticleBtn = document.querySelector('.create-article-btn');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const addArticleBtn = document.querySelector('.add-article-btn');
createArticleBtn.addEventListener('click', () => {
   modal.style.display = "block";
})

modal.addEventListener('click', (e) => {
   modal.style.display = "none";
});

modalContent.addEventListener('click', e => e.stopPropagation());

addArticleBtn.addEventListener('click', (e) => {
   e.preventDefault();

   let articleObj = {};

   let articleText = document.getElementById('article').value;
   let contentText = document.getElementById('content').value;
   let dateText = document.getElementById('date').value;

   articleObj.article = articleText
   articleObj.content = contentText
   articleObj.date = dateText

   articleItems.push(articleObj);
   window.localStorage.setItem('articleItems', JSON.stringify(articleItems));

   renderArticleItems(listItems);
   modal.style.display = "none"
})